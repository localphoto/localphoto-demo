"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AtSignIcon,
  BracesIcon,
  ContactIcon,
  FolderIcon,
  GalleryVerticalEndIcon,
  HashIcon,
  LayoutGridIcon,
  MapPinIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Playlist = string;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const pathname = usePathname();

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
            <Link href="/">
              <Button
                variant={pathname === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <LayoutGridIcon size={18} className="mr-2 h-4 w-4" />
                Gallery
              </Button>
            </Link>
            <Button
              disabled
              variant={pathname.startsWith("/people") ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <ContactIcon size={18} className="mr-2 h-4 w-4" />
              People
            </Button>
            <Link href="/places">
              <Button
                variant={pathname.startsWith("/places") ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <MapPinIcon size={18} className="mr-2 h-4 w-4" />
                Places
              </Button>
            </Link>
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
