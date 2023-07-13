"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ApertureIcon, SearchIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function Menu() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div className="shadow-sm backdrop-blur-xl backdrop-brightness-150 fixed top-0 z-50 flex items-center w-full px-2 lg:px-4 bg-background/50">
        <Menubar className="flex-1 justify-start border-none rounded-none px-0 lg:px-0 bg-transparent">
          <MenubarMenu>
            <MenubarTrigger>
              <ApertureIcon className="text-pink-500" size={18} />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onSelect={() => setAboutOpen(true)}>
                About try.local.photo
              </MenubarItem>
              <MenubarItem disabled>Check for Updates</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Download App</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Android</MenubarItem>
                  <MenubarItem>iOS</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                Preferences<MenubarShortcut>⌘,</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="relative">File</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>New</MenubarSubTrigger>
                <MenubarSubContent className="w-[230px]">
                  <MenubarItem>
                    Album <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Album from Selection <MenubarShortcut>⇧⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Neural Album <MenubarShortcut>⌥⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Album Folder</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Close Window <MenubarShortcut>⌘W</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Library</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Update Cloud Library</MenubarItem>
                  <MenubarItem>Update Genius</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Organize Library...</MenubarItem>
                  <MenubarItem>Export Library...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Import Playlist...</MenubarItem>
                  <MenubarItem disabled>Export Playlist...</MenubarItem>
                  <MenubarItem>Show Duplicate Items</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Get Album Artwork</MenubarItem>
                  <MenubarItem disabled>Get Track Names</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                Import... <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>Burn Playlist to Disc...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
              </MenubarItem>
              <MenubarItem>Convert</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Page Setup...</MenubarItem>
              <MenubarItem disabled>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem disabled>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled>
                Cut <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Copy <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Paste <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Select All <MenubarShortcut>⌘A</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Smart Dictation...{" "}
                <MenubarShortcut>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                    <circle cx="17" cy="7" r="5" />
                  </svg>
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Emoji & Symbols{" "}
                <MenubarShortcut>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger inset>Theme</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="automatic">
                    <MenubarRadioItem value="automatic">
                      Automatic
                    </MenubarRadioItem>
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger inset>Accent Color</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="pink">
                    <MenubarRadioItem
                      value="slate"
                      className="focus:bg-slate-100"
                    >
                      Slate
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="gray"
                      className="focus:bg-gray-100"
                    >
                      Gray
                    </MenubarRadioItem>
                    <MenubarRadioItem value="red" className="focus:bg-red-100">
                      Red
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="orange"
                      className="focus:bg-orange-100"
                    >
                      Orange
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="amber"
                      className="focus:bg-amber-100"
                    >
                      Amber
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="yellow"
                      className="focus:bg-yellow-100"
                    >
                      Yellow
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="lime"
                      className="focus:bg-lime-100"
                    >
                      Lime
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="green"
                      className="focus:bg-green-100"
                    >
                      Green
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="emerald"
                      className="focus:bg-emerald-100"
                    >
                      Emerald
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="teal"
                      className="focus:bg-teal-100"
                    >
                      Teal
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="cyan"
                      className="focus:bg-cyan-100"
                    >
                      Cyan
                    </MenubarRadioItem>
                    <MenubarRadioItem value="sky" className="focus:bg-sky-100">
                      Sky
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="blue"
                      className="focus:bg-blue-100"
                    >
                      Blue
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="indigo"
                      className="focus:bg-indigo-100"
                    >
                      Indigo
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="violet"
                      className="focus:bg-violet-100"
                    >
                      Violet
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="purple"
                      className="focus:bg-purple-100"
                    >
                      Purple
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="fuchsia"
                      className="focus:bg-fuchsia-100"
                    >
                      Fuchsia
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="pink"
                      className="focus:bg-pink-100"
                    >
                      Pink
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="rose"
                      className="focus:bg-rose-100"
                    >
                      Rose
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarCheckboxItem checked>Show Menu Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
              <MenubarCheckboxItem>Show Detail Pane</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
              </MenubarItem>
              <MenubarItem inset>
                Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled inset>
                Enter Full Screen
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hidden md:block">User</MenubarTrigger>
            <MenubarContent forceMount>
              <MenubarLabel inset>Switch User</MenubarLabel>
              <MenubarRadioGroup value="demo">
                <MenubarRadioItem value="demo">Demo</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset disabled>
                Add User
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="justify-center">
          <span className="backdrop-blur-2xl backdrop-brightness-150 shadow-black/10 shadow-inner flex items-center rounded-full w-96 px-3">
            <SearchIcon className="text-pink-400" size={18} />
            <Input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-pink-400 font-medium border-0 rounded-full h-10 focus-visible:ring-offset-0 focus-visible:ring-transparent"
            />
          </span>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="https://local.photo">
            <Button className="bg-pink-600 hover:bg-pink-500" size={"sm"}>
              Get your local.photo
            </Button>
          </a>
        </div>
      </div>

      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="sm:max-w-[425px] py-10 px-24 flex flex-col items-center text-center">
          <ApertureIcon className="text-pink-500 mb-4" size={24} />
          <h1 className="leading-tight">try.local.photo</h1>
          <DialogDescription>
            <span className="block">LocalPhoto Web v0.1.0</span>
            <span className="block">LocalPhoto Server v0.1.0</span>
            <span className="block mt-4">
              <Button className="text-xs" variant={"link"}>
                Release Notes
              </Button>
              <Button className="text-xs" variant={"link"}>
                Acknowledgements
              </Button>
            </span>
            <span className="block mt-4 text-xs opacity-50">
              © 2023 LocalPhoto. All rights reserved.
            </span>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}