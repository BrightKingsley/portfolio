import "@/public/css/globals.css";
import type { Metadata } from "next";
import "swiper/css";

const description = "Build amazing websites and applications";

const keywords = [
  "bright kingsley",
  "web developer",
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "bright kingsley developer",
  "responsive designer",
  "creative developer",
  "software developer",
  "mobile developer",
  "flutter developer",
  "bright kingsley react developer",
  "bright kingsley is a react developer",
  "bright kingsley writes good code",
  "bright kingsley is a good team player",
  "bright kingsley loves to code",
  "fullstack web developer",
  "backend web developer",
  "frontend web developer",
  "front-end web and mobile developer",
  "back-end developer",
  "bright kingsley react",
  "bright kingsley nextjs",
  "bright kingsley next",
  "bright kingsley javscript",
  "bright kingsley typescript",
  "teamwork",
  "bright kingsley git",
  "github git ersion control",
  "experienced developer",
  "bright kingsley experienced developer",
  "Bright Kingsley",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://drawr.vercel.app"),
  title: "Bright Kingsley | Software Developer",
  description: description,
  icons: { apple: "/apple-touch-icon.png", icon: "" },
  viewport: { width: "device-width", initialScale: 1 },
  keywords: keywords,
  openGraph: {
    type: "website",
    url: "/",
    title: "Bright Kingsley | Software Developer",
    description: description,
    siteName: "Drawr",
    locale: "en_UK",
  },
  twitter: {
    site: "/",
    title: "Bright Kingsley | Software Developer",
    creator: "@drawr",
    card: "summary_large_image",
    description: description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-hubot">
      <body className="bg-gray-200">
        {/* <Navbar /> */}
        <main
          className={`w-screen h-screen overflow-auto overflow-x-hidden min-h-full relative bg-primary/5`}
        >
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
