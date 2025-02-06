import CardWrapper from '@/components/dashboard/card-wrapper';
import { Shield } from 'lucide-react';

interface SecurityAndSafetyProps {
  dict: {
    title: string;
    visitorManagement: {
      trackVisitors: string;
      issueVisitorPasses: string;
    };
    emergencyAlerts: {
      sendAlerts: string;
      drillManagement: string;
    };
    cctvMonitoring: {
      viewLiveFeed: string;
      generateReports: string;
    };
    features: Array<string>;
  };
}

export default function SecurityAndSafety({ dict }: SecurityAndSafetyProps) {
  return (
    <CardWrapper icon={Shield} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Visitor Management:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.visitorManagement.trackVisitors}</li>
          <li>{dict.visitorManagement.issueVisitorPasses}</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Emergency Alerts:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.emergencyAlerts.sendAlerts}</li>
          <li>{dict.emergencyAlerts.drillManagement}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">CCTV Monitoring:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.cctvMonitoring.viewLiveFeed}</li>
          <li>{dict.cctvMonitoring.generateReports}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
