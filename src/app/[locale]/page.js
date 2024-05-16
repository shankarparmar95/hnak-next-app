import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
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
