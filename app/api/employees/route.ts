// import { NextResponse } from "next/server";
// import { query } from "@/lib/db";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);

//     const search = searchParams.get("search");

//    let sql = `
//   SELECT
//     e.employee_id,
//     e.name,
//     e.position,

//     d.name AS department,

//     COALESCE(o.name, '') AS office,

//     COALESCE(oa.role, '') AS office_role,

//     COALESCE(oa.head_type, 'NONE') AS head_type

//   FROM employee e

//   LEFT JOIN department d
//   ON e.department_id = d.department_id

//   LEFT JOIN office_assign oa
//   ON e.employee_id = oa.employee_id

//   LEFT JOIN office o
//   ON oa.office_id = o.office_id
// `;

//     let values: any[] = [];

//     // SEARCH
//     if (search) {
//       sql += `
//         WHERE
//           e.name ILIKE $1
//           OR e.position ILIKE $1
//           OR d.name ILIKE $1
//           OR o.name ILIKE $1
//           OR oa.role ILIKE $1

//         LIMIT 10
//       `;

//       values = [`%${search}%`];
//     } else {
//       sql += ` LIMIT 20`;
//     }

//     const result = await query(sql, values);

//     return NextResponse.json(result.rows);
//   } catch (error: any) {
//     console.error("POSTGRES ERROR:", error);

//     return NextResponse.json(
//       {
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    let sql = `
      SELECT
        e.employee_id,
        e.name,
        e.position,
        d.name AS department,
        COALESCE(o.name, '') AS office,
        COALESCE(oa.role, '') AS office_role,
        COALESCE(oa.head_type, 'NONE') AS head_type
      FROM employee e
      LEFT JOIN department d
        ON e.department_id = d.department_id
      LEFT JOIN office_assign oa
        ON e.employee_id = oa.employee_id
      LEFT JOIN office o
        ON oa.office_id = o.office_id
    `;

    const values: any[] = [];

    // SEARCH FILTER
    if (search) {
      sql += `
        WHERE
          e.name ILIKE $1
          OR e.position ILIKE $1
          OR d.name ILIKE $1
          OR o.name ILIKE $1
          OR oa.role ILIKE $1
      `;

      values.push(`%${search}%`);
    }

    sql += ` LIMIT 20`;

    const result = await query(sql, values);

    return NextResponse.json(
      {
        success: true,
        data: result.rows,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("POSTGRES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}