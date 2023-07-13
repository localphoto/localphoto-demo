import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRoundIcon, CalendarClockIcon } from "lucide-react";

export function LoginDialog() {
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader className="mb-4">
          <AlertDialogTitle className="">try.local.photo</AlertDialogTitle>
          <Alert className="border-yellow-500 [&:has(svg)]:pl-4">
            <div className="text-yellow-500 mb-2">
              <KeyRoundIcon className="text-yellow-500 h-4 w-4" />
            </div>
            <AlertDescription className="text-primary">
              <div className="flex w-40">
                <span className="flex-1 opacity-50">Username</span>
                <span className="flex-1 justify-end">demo</span>
              </div>
              <div className="flex w-40">
                <span className="flex-1 opacity-50">Password</span>
                <span className="flex-1 justify-end">demo</span>
              </div>
            </AlertDescription>
          </Alert>
          <Alert className="border-red-500 [&:has(svg)]:pl-4">
            <div className="text-red-500 mb-2">
              <CalendarClockIcon className="text-red-500 h-4 w-4" />
            </div>
            <AlertDescription className="text-primary">
              The try.local.photo database is undergoing maintenance. Check back
              after 2023-07-13T05:00:00.
            </AlertDescription>
          </Alert>
        </AlertDialogHeader>

        <div>
          <div className="grid w-full max-w-lg items-center gap-1.5 mb-6">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" placeholder="Username" />
          </div>
          <div className="grid w-full max-w-lg items-center gap-1.5 mb-6">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction disabled className="bg-pink-500">
            Sign In
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
