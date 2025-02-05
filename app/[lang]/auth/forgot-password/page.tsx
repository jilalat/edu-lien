import { getDictionary } from '@/lib/dictionary';
import PageWrapper from '../components/page-wrapper';
import { ForgotForm } from '../components/forgot-form';
import Heading from '../components/heading';

export default async function ForgotPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <Heading
        title={dict.auth.forgotPassword.title}
        description={dict.auth.forgotPassword.description}
      />
      <ForgotForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
