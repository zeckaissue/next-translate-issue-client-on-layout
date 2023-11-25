import { TestClient } from '@/components/TestClient';
import useTranslation from 'next-translate/useTranslation';

const Homepage = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      This a page: {t('test')}
      <TestClient />
    </div>
  );
};
export default Homepage;
