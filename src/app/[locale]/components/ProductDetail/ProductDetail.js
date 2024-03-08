import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ProductDetail = () => {
  const t = useTranslations();
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
