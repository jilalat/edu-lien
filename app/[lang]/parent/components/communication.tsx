import CardWrapper from '@/components/dashboard/card-wrapper';
import { MessageSquare } from 'lucide-react';

interface CommunicationProps {
  dict: {
    title: string;
    directMessaging: string;
    languageTranslation: { availableLanguages: string[]; description: string };
    announcements: { title: string; description: string };
  };
}

export default function Communication({ dict }: CommunicationProps) {
  return (
    <CardWrapper icon={MessageSquare} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.directMessaging}</li>
        <li>{dict.languageTranslation.description}</li>
        <li>
          {dict.announcements.title}: {dict.announcements.description}
        </li>
      </ul>
      <h3 className="font-medium mt-4">Available Languages:</h3>
      <ul className="list-disc pl-5 space-y-2">
        {dict.languageTranslation.availableLanguages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </CardWrapper>
  );
}
