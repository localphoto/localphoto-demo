import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Database } from "@/types/Database";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import PhotoModal from "./PhotoModal";

export default async function PhotoModalWrapper({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const supabase: SupabaseClient<Database> = createClient(
    process.env?.NEXT_PUBLIC_SUPABASE_URL!,
    process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  console.log(photoId);

  let { data: photo, error } = await supabase
    .from("photos")
    .select("path")
    .eq("id", photoId)
    .maybeSingle();

  return (
    photo &&
    photo.path && (
      <PhotoModal
        src={"https://d2g3wyw4vlq6n.cloudfront.net/demo/photos/" + photo.path}
      />
    )
  );
}
