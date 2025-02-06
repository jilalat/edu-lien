import DashboardWrapper from '@/components/dashboard/dashboard-warapper';
import { routes } from '@/config/routes';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';
import AcademicPlanning from './components/academic-planning';
import Analytics from './components/analytics';
import Communication from './components/communication';
import EventManagement from './components/event-management';
import FeeCollection from './components/fee-collection';
import Management from './components/management';
import Overview from './components/overview';
import ResourceManagement from './components/resource-management';
import SecurityAndSafety from './components/security-and-safety';
import StaffManagement from './components/staff-management';
import Transportation from './components/transportation';

export { generateStaticParams };

export default async function SchoolDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const isAdmin = true; // Replace with actual auth check
  if (!isAdmin) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <DashboardWrapper
      title={dict.schoolPage.title}
      description={dict.schoolPage.welcome}
    >
      <Overview dict={dict.schoolPage.sections.overview} />
      <Management dict={dict.schoolPage.sections.management} />
      <Analytics dict={dict.schoolPage.sections.analytics} />
      <EventManagement dict={dict.schoolPage.sections.eventManagement} />
      <StaffManagement dict={dict.schoolPage.sections.staffManagement} />
      <FeeCollection dict={dict.schoolPage.sections.feeCollection} />
      <ResourceManagement dict={dict.schoolPage.sections.resourceManagement} />
      <Communication dict={dict.schoolPage.sections.communication} />
      <AcademicPlanning dict={dict.schoolPage.sections.academicPlanning} />
      <SecurityAndSafety dict={dict.schoolPage.sections.securityAndSafety} />
      <Transportation dict={dict.schoolPage.sections.transportation} />
    </DashboardWrapper>
  );
}
