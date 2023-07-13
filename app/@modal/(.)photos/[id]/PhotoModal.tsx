"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function PhotoModal({ src }: { src: string }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={router.back}>
      <DialogContent className="h-5/6 max-w-0 flex flex-col items-center shadow-none border-none bg-transparent">
        <img className="h-full max-w-7xl" src={src} />
      </DialogContent>
    </Dialog>
  );
}
