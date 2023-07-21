import { SupabaseClient, createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Database } from "@/types/Database";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

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

export default async function ImageGrid({ photos }: { photos: any }) {
  if (!photos) {
    const supabase: SupabaseClient<Database> = createClient(
      process.env?.NEXT_PUBLIC_SUPABASE_URL!,
      process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    let res = await supabase.from("photos").select(
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
    photos = res.data;
  }

  return (
    <div className="p-4 columns-1 gap-2 sm:columns-2 xl:columns-4 2xl:columns-4">
      {photos &&
        photos.map(
          (photo: any) =>
            photo.path && (
              <ImageGridItem
                key={photo.id}
                id={photo.id}
                src={photo.path}
                predictions={photo.imagenet_predictions || null}
                similarity={photo.similarity || null}
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
  similarity,
}: {
  id: number;
  src: string;
  predictions: any;
  similarity: number;
}) {
  return (
    <div className="pb-2">
      <HoverCard openDelay={200} closeDelay={0}>
        <HoverCardTrigger>
          <Link href={`/photos/${id}`} className="relative cursor-zoom-in">
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
            <div className="absolute top-1 right-1 space-x-1">
              <Link href={`/search?photo=${id}`}>
                <Button className="bg-black/40 rounded-full p-0 h-7 aspect-square">
                  <SearchIcon size={18} className="h-3.5 w-3.5" />
                </Button>
              </Link>
              {/* <Button className="bg-black/40  rounded-full p-0 h-7 aspect-square">
                <InfoIcon size={18} className="h-3.5 w-3.5" />
              </Button> */}
            </div>
            {similarity && (
              <div className="absolute top-1 left-1">
                <Button className="bg-black/40 rounded-full py-0 px-2 h-7 text-xs">
                  {(similarity * 100).toPrecision(3)}%
                </Button>
              </div>
            )}
          </Link>
        </HoverCardTrigger>

        {predictions && (
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
                    {prediction.probability.toPrecision(3) + "%"}
                  </span>
                </div>
              ))}
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
}
