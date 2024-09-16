import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://cityconcept.netlify.app/"),
  title: { default: "City-concept", template: `%s | City-concept` },
  description: "City-concept.",
  openGraph: {
    url: "/",
    title: "City Concept",
    description: "City-concept",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Concept",
    description: "City-concept.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Navbar />
        <main className='pt-[156px]'> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
