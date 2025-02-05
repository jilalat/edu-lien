import { getDictionary } from '@/lib/dictionary';
import { NewPasswordForm } from './new-password-form';
import PageWrapper from '../components/page-wrapper';
import Heading from '../components/heading';

export default async function NewPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <Heading
        title={dict.auth.newPassword.title}
        description={dict.auth.newPassword.description}
      />
      <NewPasswordForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
