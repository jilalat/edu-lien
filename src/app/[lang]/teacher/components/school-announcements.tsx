import CardWrapper from '@//components/dashboard/card-wrapper';
import { Megaphone } from 'lucide-react';

interface SchoolAnnouncementsProps {
  dict: {
    title: string;
    viewAllAnnouncements: string;
    postNewAnnouncement: string;
    announcements: Array<{ title: string; date: string; content: string }>;
  };
}

export default function SchoolAnnouncements({
  dict,
}: SchoolAnnouncementsProps) {
  return (
    <CardWrapper icon={Megaphone} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.viewAllAnnouncements}</li>
        <li>{dict.postNewAnnouncement}</li>
      </ul>
      <div className="mt-4">
        <h3 className="font-medium mb-2">Announcements</h3>
        <ul className="space-y-2">
          {dict.announcements.map((announcement, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md">
              <h4 className="font-medium">{announcement.title}</h4>
              <p className="text-sm text-gray-600">Date: {announcement.date}</p>
              <p className="text-sm text-gray-600">{announcement.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}
