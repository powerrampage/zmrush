import { pool } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = pool.query("SELECT 1");
    return NextResponse.json({ result: result, success: true });
  } catch (error) {
    return NextResponse.json({ result: null, success: false }, { status: 500 });
  }
}
