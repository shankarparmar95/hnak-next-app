"use client";

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  console.log("pathname--->", pathname);
  let path = "";
  if (pathname.startsWith(`/${localActive}/`)) {
    path = pathname.split(`/${localActive}/`)[1] || "";
  }

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}/${path}`);
    });
  };

  return (
    <label>
      <p>{t("changeLangauge")}</p>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </label>
  );
};

export default LanguageSwitcher;
