import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziexpo AI Office",
  description: "Интерактивный AI-офис YouTube-канала Ziexpo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
