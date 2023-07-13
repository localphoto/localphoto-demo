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
import { DialogOverlay } from "@radix-ui/react-dialog";

export function PhotoDialog({ button, src }: { button: any; src: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="h-5/6 max-w-0 flex flex-col items-center shadow-none border-none bg-transparent">
        <img className="h-full max-w-7xl" src={src} />
      </DialogContent>
    </Dialog>
  );
}
