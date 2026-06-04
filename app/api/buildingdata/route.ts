import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Slug is required" },
      { status: 400 }
    );
  }

  try {
    const safeSlug = slug.trim().toLowerCase();

    // BUILDING
    const buildingRes = await query(
      `
      SELECT *
      FROM building
      WHERE LOWER(slug) = $1
      LIMIT 1
      `,
      [safeSlug]
    );

    const building = buildingRes.rows[0];

    if (!building) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    // OFFICES
    const officeResult = await query(
      `
      SELECT office_id, name, description
      FROM office
      WHERE building_id = $1
      `,
      [building.building_id]
    );

    // ROOMS (IMPORTANT: normalize floor)
    const roomResult = await query(
      `
      SELECT
        room_id,
        name,
        type,
        UPPER(TRIM(floor)) AS floor
      FROM rooms
      WHERE building_id = $1
      `,
      [building.building_id]
    );

    return NextResponse.json({
      ...building,
      offices: officeResult.rows,
      rooms: roomResult.rows,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import buildingsData from "../../data/databuilding.json";

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const slug = searchParams.get("slug");

//   if (!slug) {
//     return NextResponse.json({ error: "Slug is required" }, { status: 400 });
//   }

//   // Find building from JSON
//   const building = buildingsData.find(
//     (b) => b.slug.toLowerCase() === slug.toLowerCase()
//   );

//   if (!building) {
//     return NextResponse.json({ error: "Building not found" }, { status: 404 });
//   }

//   return NextResponse.json(building);
// }