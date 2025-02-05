import { getDictionary } from '@/lib/dictionary';
import { ForgotPasswordForm } from './forgot-password-form';

export default async function ForgotPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {dict.auth.forgotPassword.title}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          {dict.auth.forgotPassword.description}
        </p>
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <ForgotPasswordForm dict={dict.auth} lang={lang} />
      </div>
    </div>
  );
}