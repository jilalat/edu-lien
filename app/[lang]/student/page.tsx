import DashboardWrapper from '@/components/dashboard/dashboard-warapper';
import { routes } from '@/config/routes';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';
import ClassSchedule from './components/class-schedule';
import DashboardOverview from './components/dashboard-overview';
import HomeworkTracker from './components/homework-tracker';
import LearningResources from './components/learning-resources';
import PeerCollaboration from './components/peer-collaboration';
import ProgressReports from './components/progress-reports';

export { generateStaticParams };

export default async function StudentDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isStudent = true;

  if (!isStudent) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <DashboardWrapper
      title={dict.studentPage.title}
      description={dict.studentPage.welcome}
    >
      <DashboardOverview dict={dict.studentPage.sections.dashboardOverview} />
      <HomeworkTracker dict={dict.studentPage.sections.homeworkTracker} />
      <LearningResources dict={dict.studentPage.sections.learningResources} />
      <ClassSchedule dict={dict.studentPage.sections.classSchedule} />
      <ProgressReports dict={dict.studentPage.sections.progressReports} />
      <PeerCollaboration dict={dict.studentPage.sections.peerCollaboration} />
    </DashboardWrapper>
  );
}
