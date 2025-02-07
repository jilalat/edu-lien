import DashboardWrapper from '@/components/dashboard/dashboard-warapper';
import { routes } from '@/config/routes';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';
import CalendarOverview from './components/calendar-overview';
import ManagementCards from './components/management-cards';
import QuickActions from './components/quick-actions';
import StatsOverview from './components/stats-overview';

export { generateStaticParams };

export default async function SchoolDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isSchoolAdmin = true;

  if (!isSchoolAdmin) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  const events = [
    'Parent-Teacher Meeting',
    'Annual Sports Day',
    'Board Exam Preparation',
    'Staff Training',
  ];

  return (
    <DashboardWrapper
      title={dict.schoolPage.title}
      description={dict.schoolPage.welcome}
    >
      <StatsOverview dict={dict.schoolPage.sections.overview.stats} />
      <QuickActions dict={dict.schoolPage.sections.overview.quickActions} />
      <CalendarOverview events={events} />
      <ManagementCards />
    </DashboardWrapper>
  );
}
