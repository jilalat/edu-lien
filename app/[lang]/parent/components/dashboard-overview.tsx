import CardWrapper from '@/components/dashboard/card-wrapper';
import ListSection from '@/components/dashboard/list-section';
import { ChartBar } from 'lucide-react';

interface DashboardOverviewProps {
  dict: {
    title: string;
    childOverview: Record<string, { title: string; description: string }>;
    notifications: Record<string, { title: string; description: string }>;
  };
}

export default function DashboardOverview({ dict }: DashboardOverviewProps) {
  return (
    <CardWrapper icon={ChartBar} title={dict.title}>
      <ListSection dict={dict.childOverview} />
      <ListSection dict={dict.notifications} />
    </CardWrapper>
  );
}
