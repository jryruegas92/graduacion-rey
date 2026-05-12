import "./globals.css";

export const metadata = {
  title: "Graduacion Rey - MBA 2026 - Berkeley Haas",
  description:
    "Toda la informacion para la graduacion de Rey Yruegas en UC Berkeley Haas. 20-26 de mayo, 2026.",
};

const fontHref =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href={fontHref} rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
