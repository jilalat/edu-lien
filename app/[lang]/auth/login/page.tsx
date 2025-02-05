import { getDictionary } from '@/lib/dictionary';
import { LoginForm } from './login-form';
import PageWrapper from '../components/page-wrapper';
import Heading from '../components/heading';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <Heading
        title={dict.auth.login.welcomeMessage}
        description={dict.auth.login.description}
      />
      <LoginForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
