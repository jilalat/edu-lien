import { getDictionary } from '@/lib/dictionary';
import { LoginForm } from './login-form';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {dict.loginPage.welcomeMessage}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          {dict.loginPage.description}
        </p>
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {dict.loginPage.form.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {dict.loginPage.form.description}
        </p>
        <LoginForm dict={dict.loginPage.form} lang={lang} />
      </div>
    </div>
  );
}