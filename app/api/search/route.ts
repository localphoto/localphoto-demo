import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Database } from "@/types/Database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get URL parameters
  const photoParam = request.nextUrl.searchParams.get("photo");
  const thresholdParam = request.nextUrl.searchParams.get("threshold");
  const limitParam = request.nextUrl.searchParams.get("limit");
  // Parse URL parameters
  const photoID = parseInt(photoParam!);
  const limit = parseInt(limitParam!) || 5;
  const threshold = parseInt(thresholdParam!) || 0;

  let response;

  if (photoID) {
    const supabase: SupabaseClient<Database> = createClient(
      process.env?.NEXT_PUBLIC_SUPABASE_URL!,
      process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: photos, error } = await supabase.rpc("image_search", {
      query_id: photoID,
      match_threshold: threshold,
      match_count: limit,
    });

    response = photos;
  }

  return NextResponse.json(response);
}
