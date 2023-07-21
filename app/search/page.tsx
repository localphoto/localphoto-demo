import ImageGrid from "@/components/ImageGrid";
import { ArrowLeftIcon } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  //
  const apiProtocol = "http://";
  const apiHost = headers().get("host") || "local.photo";
  const apiUrl = new URL("/api/search", apiProtocol + apiHost);
  if (searchParams) {
    apiUrl.search = new URLSearchParams(searchParams).toString();
  }

  console.log(apiUrl.toString());

  const res = await fetch(apiUrl, { next: { revalidate: 1 } });
  const photos: [] = await res.json();

  const queryPhoto: any = photos.find((photo: any) => photo.similarity == 1);

  return (
    <div>
      <span className="flex items-center mt-6 mb-4 ml-5">
        <Link href="/">
          <ArrowLeftIcon className="mr-4 h-5 w-5" />
        </Link>
        <h2 className="text-xl mr-2">Search results for </h2>
        {queryPhoto && (
          <Link href={`/photos/${queryPhoto.id}`}>
            <Image
              alt="Query photo"
              className="rounded-full h-7 w-auto"
              src={
                "https://d2g3wyw4vlq6n.cloudfront.net/demo/photos/" +
                queryPhoto.path
              }
              width={40}
              height={40}
            />
          </Link>
        )}
      </span>
      <ImageGrid photos={photos} />
    </div>
  );
}
