import React from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const t = useTranslations();

  return (
    <header>
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
