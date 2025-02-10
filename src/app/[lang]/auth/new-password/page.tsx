import AuthHeading from '@//components/auth/heading';
import PageWrapper from '@//components/auth/page-wrapper';
import { getDictionary } from '@//lib/dictionary';
import { NewPasswordForm } from './new-password-form';

export default async function NewPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <AuthHeading
        title={dict.auth.newPassword.title}
        description={dict.auth.newPassword.description}
      />
      <NewPasswordForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
