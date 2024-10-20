import type { Metadata } from "next";
import "@/styles/globals.css";
import { TopBar } from "@/components/TopBar";
import { AntdConfigProvider } from "@/providers/AntdConfigProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Montserrat as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fontSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <AntdRegistry>
              <AntdConfigProvider>
                <TopBar />
                {children}
              </AntdConfigProvider>
            </AntdRegistry>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
