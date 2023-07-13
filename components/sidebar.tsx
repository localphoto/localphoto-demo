import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AtSignIcon,
  BracesIcon,
  ContactIcon,
  FolderIcon,
  FoldersIcon,
  GalleryHorizontalEndIcon,
  GalleryVerticalEndIcon,
  HashIcon,
  LayoutGridIcon,
  MapPinIcon,
  PinIcon,
  SearchIcon,
} from "lucide-react";
import { PhotoDialog } from "./photo";

type Playlist = string;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="hidden mb-2 px-4 text-lg font-semibold tracking-tight">
            Photos
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="hidden w-full justify-start">
              <SearchIcon size={18} className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <LayoutGridIcon size={18} className="mr-2 h-4 w-4" />
              Gallery
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <ContactIcon size={18} className="mr-2 h-4 w-4" />
              People
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <MapPinIcon size={18} className="mr-2 h-4 w-4" />
              Places
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <AtSignIcon size={18} className="mr-2 h-4 w-4" />
              Albums
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <HashIcon size={18} className="mr-2 h-4 w-4" />
              Tags
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <BracesIcon size={18} className="mr-2 h-4 w-4" />
              Metadata
            </Button>
            <Button disabled variant="ghost" className="w-full justify-start">
              <FolderIcon size={18} className="mr-2 h-4 w-4" />
              Folders
            </Button>
          </div>
        </div>
        <div className="hidden py-2">
          <h2 className="relative px-7 text-sm opacity-20 font-bold tracking-tight">
            Pinned
          </h2>
          <ScrollArea className="h-[270px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <GalleryVerticalEndIcon size={18} className="mr-2 h-4 w-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
