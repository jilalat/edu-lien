import AuthHeading from '@/components/auth/heading';
import PageWrapper from '@/components/auth/page-wrapper';
import { getDictionary } from '@/lib/dictionary';
import { LoginForm } from './login-form';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <AuthHeading
        title={dict.auth.login.welcomeMessage}
        description={dict.auth.login.description}
      />
      <LoginForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
