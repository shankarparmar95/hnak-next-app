import React from "react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const ProductDetail = async () => {
  const t = await getTranslations();
  return (
    <div>
      <h2>{t("pdpTitle")}</h2> <br />
      <Link href="/menna-o-fena/prayer-needs-mof/subha-mof">
        {t("plpLink")}
      </Link>
    </div>
  );
};

export default ProductDetail;
