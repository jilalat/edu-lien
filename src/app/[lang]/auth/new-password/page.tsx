import { getDictionary } from '@/helpers/getDictionary';
import PageWrapper from '../components/page-wrapper';
import { NewPasswordForm } from './components/form';
import langData from './lang.json';

export default async function NewPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang, langData);
  return (
    <PageWrapper title={dict.welcomeMessage} description={dict.description}>
      <NewPasswordForm lang={lang} />
    </PageWrapper>
  );
}
