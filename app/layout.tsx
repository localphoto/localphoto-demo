import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
