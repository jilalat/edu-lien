import CardWrapper from '@/components/dashboard/card-wrapper';
import { Users } from 'lucide-react';

interface PeerCollaborationProps {
  dict: {
    title: string;
    groupChats: string;
    forums: string;
    fileSharing: string;
    realTimeTools: string;
    features: string[];
  };
}

export default function PeerCollaboration({ dict }: PeerCollaborationProps) {
  return (
    <CardWrapper icon={Users} title={dict.title}>
      <div className="space-y-4">
        <p>{dict.groupChats}</p>
        <p>{dict.forums}</p>
        <p>{dict.fileSharing}</p>
        <p>{dict.realTimeTools}</p>
      </div>
    </CardWrapper>
  );
}
