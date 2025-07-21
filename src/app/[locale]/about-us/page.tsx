import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  const t = useTranslations("HomePage");
  return <div>{t("about")}</div>;
}