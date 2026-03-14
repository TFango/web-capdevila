import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Capdevila Soldadura | Mar del Plata",
  description: "Soldador certificado con 20 años de experiencia en soldadura naval, industrial, construcción y doméstica. Presupuesto sin cargo en Mar del Plata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}