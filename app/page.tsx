import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { Menu } from "@/components/menu";
import { Search } from "@/components/search";
import Keyboard from "@/components/keyboard";
import { LoginDialog } from "@/components/login";
import ImageGrid from "@/components/ImageGrid";
import { ScrollArea } from "@/components/ui/scroll-area";

const playlists = [
  "Beach day",
  "Cars",
  "Cats and dogs",
  "Christmas",
  "Food pictures",
  "Memes",
  "My pets",
  "Space photos",
  "Work trips",
];

export default function Home() {
  return (
    <div>
      <Menu />
      <Sidebar
        className="fixed left-0 bg-gray-50 border-r w-64 h-full"
        playlists={playlists}
      />
      <div className="mt-10 flex-auto ml-64 flex">
        <div className="flex-1 overflow-y-auto">
          <ScrollArea className="h-full">
            <ImageGrid />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";
// import swagPhotos from "../photos";
// import Image from "next/image";

// export default function Home() {
//   const photos = swagPhotos;

//   return (
//     <main className="container mx-auto">
//       <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
//         {photos.map(({ id, imageSrc }) => (
//           <Link key={id} href={`/photos/${id}`}>
//             <Image
//               alt=""
//               src={imageSrc}
//               height={500}
//               width={500}
//               className="w-full object-cover aspect-square"
//             />
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }
