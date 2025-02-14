import { getDictionary } from '@/lib/dictionary';
import PageWrapper from '../components/page-wrapper';
import { ForgotPassword } from './components/form';

export default async function ForgotPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper
      title={dict.auth.forgotPassword.title}
      description={dict.auth.forgotPassword.description}
    >
      <ForgotPassword dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
