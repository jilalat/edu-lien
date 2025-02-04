import { getDictionary } from '@/lib/dictionary';
import { NewPasswordForm } from './new-password-form';

export default async function NewPasswordPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {dict.loginPage.form.newPassword}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          {dict.loginPage.form.newPasswordDescription}
        </p>
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <NewPasswordForm dict={dict.loginPage.form} lang={lang} />
      </div>
    </div>
  );
}