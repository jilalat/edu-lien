import { getDictionary } from '@/lib/dictionary';
import PageWrapper from '../components/page-wrapper';
import { NewPasswordForm } from './components/form';

export default async function NewPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper
      title={dict.auth.newPassword.title}
      description={dict.auth.newPassword.description}
    >
      <NewPasswordForm dict={dict.auth} lang={lang} />
    </PageWrapper>
  );
}
