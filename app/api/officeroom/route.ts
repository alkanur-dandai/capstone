// FILE: app/api/rooms-offices/route.ts
// GET /api/rooms-offices?q=<search term>

import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../lib/db"; // ← adjust path if your db.ts is elsewhere

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim() ?? "";

  if (!q) {
    return NextResponse.json([]);
  }

  const search = `%${q}%`;

  try {
    const { rows } = await query(
      `
      SELECT
        'room'                          AS kind,
        r.room_id                       AS id,
        r.name,
        r.type                          AS type_or_description,
        b.building_id,
        b.name                          AS building_name,
       b.slug AS building_slug
      FROM rooms r
      JOIN building b ON b.building_id = r.building_id
      WHERE r.name ILIKE $1

      UNION ALL

      SELECT
        'office'                        AS kind,
        o.office_id                     AS id,
        o.name,
        o.description                   AS type_or_description,
        b.building_id,
        b.name                          AS building_name,
        b.slug AS building_slug
      FROM office o
      JOIN building b ON b.building_id = o.building_id
      WHERE o.name ILIKE $1

      ORDER BY kind, name
      LIMIT 20
      `,
      [search]
    );

    const results = rows.map((row) => {
      if (row.kind === "room") {
        return {
          kind: "room" as const,
          room_id: row.id,
          name: row.name,
          type: row.type_or_description ?? "",
          building_id: row.building_id,
          building_name: row.building_name,
          building_slug: row.building_slug,
        };
      } else {
        return {
          kind: "office" as const,
          office_id: row.id,
          name: row.name,
          description: row.type_or_description ?? "",
          building_id: row.building_id,
          building_name: row.building_name,
          building_slug: row.building_slug,
        };
      }
    });

    return NextResponse.json(results);
  } catch (err) {
    console.error("[rooms-offices API]", err);
    return NextResponse.json(
      { error: "Failed to fetch rooms and offices" },
      { status: 500 }
    );
  }
}