"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import { CurrentUserProvider } from "@/context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CurrentUserProvider>{children}</CurrentUserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
