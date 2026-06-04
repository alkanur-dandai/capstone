import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const result = await query(
      `
      SELECT
        building_id,
        name,
        latitude,
        longitude
      FROM building
      WHERE name ILIKE $1
      
      `,
      [`%${search}%`]
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });

  } catch (error: any) {
    console.error("SEARCH BUILDING ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}