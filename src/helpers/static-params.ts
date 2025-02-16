import { languages } from '@/config/dictionaries';

function getLanguageStaticParams() {
  return languages.map(language => ({ lang: language.code }));
}

export async function generateStaticParams() {
  return getLanguageStaticParams();
}
