import { routes } from '@/config/routes';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';

import DashboardWrapper from '@/components/dashboard/dashboard-warapper';
import AttendanceAndGrades from './components/attendance-and-grades';
import ClassMaterials from './components/class-materials';
import Communication from './components/communication';
import DashboardOverview from './components/dashboard-overview';
import HomeworkManagement from './components/homework-management';
import LessonPlanning from './components/lesson-planning';
import ProfessionalDevelopment from './components/professional-development';
import SchoolAnnouncements from './components/school-announcements';

export { generateStaticParams };

export default async function TeacherDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isTeacher = true;

  if (!isTeacher) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <DashboardWrapper
      title={dict.teacherPage.title}
      description={dict.teacherPage.welcome}
    >
      <DashboardOverview dict={dict.teacherPage.sections.dashboardOverview} />
      <HomeworkManagement dict={dict.teacherPage.sections.homeworkManagement} />
      <ClassMaterials dict={dict.teacherPage.sections.classMaterials} />
      <AttendanceAndGrades
        dict={dict.teacherPage.sections.attendanceAndGrades}
      />
      <Communication dict={dict.teacherPage.sections.communication} />
      <LessonPlanning dict={dict.teacherPage.sections.lessonPlanning} />
      <ProfessionalDevelopment
        dict={dict.teacherPage.sections.professionalDevelopment}
      />
      <SchoolAnnouncements
        dict={dict.teacherPage.sections.schoolAnnouncements}
      />
    </DashboardWrapper>
  );
}
