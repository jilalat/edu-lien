import CardWrapper from '@/components/dashboard/card-wrapper';
import { MessageSquare } from 'lucide-react';

interface CommunicationProps {
  dict: {
    title: string;
    announcements: {
      sendAnnouncement: string;
      viewPastAnnouncements: string;
    };
    messaging: {
      sendMessages: string;
      broadcastMessages: string;
    };
    feedback: {
      collectFeedback: string;
      viewFeedback: string;
    };
    features: Array<string>;
  };
}

export default function Communication({ dict }: CommunicationProps) {
  return (
    <CardWrapper icon={MessageSquare} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Announcements:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.announcements.sendAnnouncement}</li>
          <li>{dict.announcements.viewPastAnnouncements}</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Messaging:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.messaging.sendMessages}</li>
          <li>{dict.messaging.broadcastMessages}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Feedback:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.feedback.collectFeedback}</li>
          <li>{dict.feedback.viewFeedback}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
