import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const t = useTranslations();

  return (
    <header>
      <nav>
        <Link href="/">{t("home")}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
