import AuthHeading from '@/components/auth/heading';
import PageWrapper from '@/components/auth/page-wrapper';
import { getDictionary } from '@/lib/dictionary';
import { ForgotForm } from '../components/forgot-form';

export default async function ForgotPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <AuthHeading
        title={dict.auth.forgotPassword.title}
        description={dict.auth.forgotPassword.description}
      />
      <ForgotForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
