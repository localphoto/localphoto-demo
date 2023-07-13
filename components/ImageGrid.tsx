import { SupabaseClient, createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PhotoDialog } from "./photo";
import { Database } from "@/types/Database";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const srcs = [
  "/vast.jpeg",
  "/staring.jpeg",
  "/chewing.jpeg",
  "/sitting.jpeg",
  "/three.jpg",
  "/framing.jpg",
  "/waving.jpg",
  "/swimming.jpeg",
  "/branching.jpg",
  "/waiting.jpg",
  "/jumping.jpeg",
  "/flying.jpg",
  "/stretching.jpg",
  "/reflecting.jpg",
  "/smiling.jpg",
  "/viewing.jpg",
  "/kissing.jpg",
  "/aloha.jpg",
  "/outlined.jpg",
  "/diving.jpg",
  "/cutting.jpg",
  "/perching.jpg",
  "/observing.jpg",
];

//export const revalidate = 60;

export default async function ImageGrid() {
  const supabase: SupabaseClient<Database> = createClient(
    process.env?.NEXT_PUBLIC_SUPABASE_URL!,
    process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  //let { data: photos, error } = await supabase.from("photos").select("id,path");
  let { data: photos, error } = await supabase.from("photos").select(
    `
      id,
      path,
      imagenet_predictions (
        rank,
        imagenet:class_id (
          class_name
        ),
        probability
      )
  `
  );

  return (
    <div className="p-4 columns-1 gap-2 sm:columns-2 xl:columns-4 2xl:columns-4">
      {photos &&
        photos.map(
          (photo) =>
            photo.path && (
              <ImageGridItem
                key={photo.id}
                id={photo.id}
                src={photo.path}
                predictions={photo.imagenet_predictions}
              />
            )
        )}
    </div>
  );
}

async function ImageGridItem({
  id,
  src,
  predictions,
}: {
  id: number;
  src: string;
  predictions: any;
}) {
  return (
    <div className="pb-2">
      <HoverCard openDelay={200} closeDelay={0}>
        <HoverCardTrigger>
          <Link href={`/photos/${id}`}>
            <Image
              alt="Photo"
              className="transform rounded-lg brightness-90 transition will-change-auto hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              src={"https://d2g3wyw4vlq6n.cloudfront.net/demo/photos/" + src}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="-my-8">
          {predictions
            .sort((a: any, b: any) => a.rank - b.rank)
            .slice(0, 3)
            .map((prediction: any, index: number) => (
              <div key={index} className="flex text-sm">
                <span className="justify-start flex-1 font-medium">
                  {prediction.imagenet.class_name}
                </span>
                <span className="justify-end">
                  {prediction.probability.toFixed(1) + "%"}
                </span>
              </div>
            ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
