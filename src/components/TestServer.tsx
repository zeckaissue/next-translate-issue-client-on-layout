import useTranslation from "next-translate/useTranslation";

export const TestServer = () => {
  const { t } = useTranslation("common");
  return <div>This is server component, translation value: {t("test")}</div>;
};
