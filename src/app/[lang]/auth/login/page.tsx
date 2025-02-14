import { getDictionary } from '@/helpers/getDictionary';
import PageWrapper from '../components/page-wrapper';
import { LoginForm } from './components/form';
import langData from './lang.json';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang, langData);

  return (
    <PageWrapper title={dict.welcomeMessage} description={dict.description}>
      <LoginForm lang={lang} />
    </PageWrapper>
  );
}
