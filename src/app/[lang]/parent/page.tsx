import DashboardWrapper from '@//components/dashboard/dashboard-warapper';
import { routes } from '@//config/routes';
import { generateStaticParams } from '@//lib/dictionaries/static-params';
import { getDictionary } from '@//lib/dictionary';
import { redirect } from 'next/navigation';
import ActivityLog from './components/activity-log';
import ChildSafetyAlerts from './components/child-safety-alerts';
import Communication from './components/communication';
import DashboardOverview from './components/dashboard-overview';
import ExtracurricularActivities from './components/extracurricular-activities';
import FeeManagement from './components/fee-management';
import HealthAndWellness from './components/health-and-wellness';
import HomeworkTracking from './components/homework-tracking';
import ParentEngagement from './components/parent-engagement';
import PerformanceTracking from './components/performance-tracking';
import ResourceCenter from './components/resource-center';
import SchoolResources from './components/school-resources';

export { generateStaticParams };

export default async function ParentDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const isParent = true; // Replace with actual auth check
  if (!isParent) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <DashboardWrapper
      title={dict.parentPage.title}
      description={dict.parentPage.welcome}
    >
      <DashboardOverview dict={dict.parentPage.sections.dashboardOverview} />
      <PerformanceTracking
        dict={dict.parentPage.sections.performanceTracking}
      />
      <HomeworkTracking dict={dict.parentPage.sections.homeworkTracking} />
      <Communication dict={dict.parentPage.sections.communication} />
      <ChildSafetyAlerts dict={dict.parentPage.sections.childSafetyAlerts} />
      <FeeManagement dict={dict.parentPage.sections.feeManagement} />
      <ActivityLog dict={dict.parentPage.sections.activityLog} />
      <ParentEngagement dict={dict.parentPage.sections.parentEngagement} />
      <ResourceCenter dict={dict.parentPage.sections.resourceCenter} />
      <ExtracurricularActivities
        dict={dict.parentPage.sections.extracurricularActivities}
      />
      <HealthAndWellness dict={dict.parentPage.sections.healthAndWellness} />
      <SchoolResources dict={dict.parentPage.sections.schoolResources} />
    </DashboardWrapper>
  );
}
