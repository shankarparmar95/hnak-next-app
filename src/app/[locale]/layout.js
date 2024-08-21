import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import MainWrapper from "../../components/MainWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "HNAK PWA App";
const APP_DEFAULT_TITLE = "HNAK PWA App";
const APP_TITLE_TEMPLATE = "%s - HNAK PWA App";
const APP_DESCRIPTION = "Best E-commerce PWA app in the world!";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#213352",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MainWrapper>
            <Header />
            {children}
          </MainWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
