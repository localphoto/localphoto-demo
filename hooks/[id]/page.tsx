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
import { DialogOverlay } from "@radix-ui/react-dialog";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export default async function PhotoModal({
  params: { id: photoID },
}: {
  params: { id: string };
}) {
  // const supabase: SupabaseClient<Database> = createClient(
  //   process.env?.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // );

  // console.log(photoID);

  // let { data: photo, error } = await supabase
  //   .from("photos")
  //   .select("path")
  //   .eq("id", photoID)
  //   .maybeSingle();

  //   <Dialog open>
  //   <DialogContent className="h-5/6 max-w-0 flex flex-col items-center shadow-none border-none bg-transparent">
  //     {photo && photo.path && (
  //       <img className="h-full max-w-7xl" src={"/" + photo.path} />
  //     )}
  //   </DialogContent>
  // </Dialog>

  return (
    <div className="container mx-auto my-10">
      <div>
        <h1>This text is written in @modal/(.)photos/[id]/page.tsx</h1>
      </div>
    </div>
  );
}
