import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">{t("title")}</h1>
      <p>{t("about")}</p>
      <LanguageSwitcher />
      <Link href="/about-us">About US</Link>
    </div>
  );
}
