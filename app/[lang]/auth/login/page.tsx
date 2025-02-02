import { getDictionary } from '@/lib/dictionary';
import { LoginForm } from './login-form';

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.home.loginForm.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {dict.home.loginForm.description}
          </p>
        </div>
        <LoginForm dict={dict.home.loginForm} lang={lang} />
      </div>
    </div>
  );
}