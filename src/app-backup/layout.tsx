"use client";
// import "styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from "./AppBar";

interface IProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Create Next App',
  description: 'Grenerated by create next app',
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
