import { Menu } from "@/components/menu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "try.local.photo",
};

// export default function Layout({
//   children,
//   modal,
// }: {
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="{inter.className}">
//         {children}
//         {modal}
//       </body>
//     </html>
//   );
// }

const albums = [
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

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Menu />
        <Sidebar
          className="fixed left-0 bg-gray-50 border-r w-64 h-full"
          playlists={albums}
        />
        <div className="mt-10 flex-auto ml-64 flex">{props.children}</div>
        {/* <LoginDialog /> */}
        {props.modal}
      </body>
    </html>
  );
}
