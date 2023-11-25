'use client';
import useTranslation from 'next-translate/useTranslation';

export const TestClient = () => {
  const { t } = useTranslation('common');
  return <div>This is client component, translation value: {t('test')}</div>;
};
