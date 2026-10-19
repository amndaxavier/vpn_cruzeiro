import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Location Lab — VPN Simulator",
  description: "Educational VPN and virtual-location interface simulator."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
