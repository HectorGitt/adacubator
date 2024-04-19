import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Adacubator",
  description: "Your gateway to success on Cardano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
