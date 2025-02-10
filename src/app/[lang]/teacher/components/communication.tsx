import CardWrapper from '@//components/dashboard/card-wrapper';
import { MessageSquare } from 'lucide-react';

interface CommunicationProps {
  dict: {
    title: string;
    sendAnnouncements: string;
    messageParents: string;
    messageStudents: string;
    languageTranslation: string;
    recentMessages: Array<{
      recipient: string;
      subject: string;
      timestamp: string;
    }>;
  };
}

export default function Communication({ dict }: CommunicationProps) {
  return (
    <CardWrapper icon={MessageSquare} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.sendAnnouncements}</li>
        <li>{dict.messageParents}</li>
        <li>{dict.messageStudents}</li>
        <li>{dict.languageTranslation}</li>
      </ul>
      <div className="mt-4">
        <h3 className="font-medium mb-2">Recent Messages</h3>
        <ul className="space-y-2">
          {dict.recentMessages.map((message, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
            >
              <span>
                {message.recipient} - {message.subject}
              </span>
              <span className="text-sm text-gray-500">{message.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}
