import { getDictionary } from '@/lib/dictionary';
import PageWrapper from '../components/page-wrapper';
import { LoginForm } from './components/form';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper
      title={dict.auth.login.welcomeMessage}
      description={dict.auth.login.description}
    >
      <LoginForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
