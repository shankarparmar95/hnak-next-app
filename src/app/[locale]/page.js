import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t("appTitle")}</h1>
      <div>
        <Link href="/menna-o-fena/prayer-needs-mof/subha-mof">
          {t("pdpLink")}
        </Link>{" "}
      </div>
      <div>
        <Link href="/mma-lava-beads-jute-tassel">{t("plpLink")}</Link>
      </div>
    </main>
  );
}
