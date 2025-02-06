import CardWrapper from '@/components/dashboard/card-wrapper';
import ListSection from '@/components/dashboard/list-section';
import { ChartBar } from 'lucide-react';
import GamificationCards from './gamification';

interface SectionItem {
  title: string;
  description: string;
}

interface DashboardOverviewProps {
  dict: {
    title: string;
    upcomingActivities: Record<string, SectionItem>;
    quickAccess: Record<string, SectionItem>;
    gamification: Record<string, SectionItem>;
  };
}

export default function DashboardOverview({ dict }: DashboardOverviewProps) {
  return (
    <CardWrapper icon={ChartBar} title={dict.title}>
      <ListSection dict={dict.upcomingActivities} />
      <ListSection dict={dict.quickAccess} />
      <GamificationCards dict={dict.gamification} />
    </CardWrapper>
  );
}
