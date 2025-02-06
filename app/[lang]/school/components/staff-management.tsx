import CardWrapper from '@/components/dashboard/card-wrapper';
import { User } from 'lucide-react';

interface StaffManagementProps {
  dict: {
    title: string;
    teacherProfiles: {
      viewAll: string;
      addNew: string;
      assignSubjects: string;
      performanceReviews: string;
    };
    nonTeachingStaff: {
      viewAll: string;
      addNew: string;
      assignRoles: string;
    };
    schedules: {
      viewTeacherSchedules: string;
      generateTimetable: string;
    };
    features: Array<string>;
  };
}

export default function StaffManagement({ dict }: StaffManagementProps) {
  return (
    <CardWrapper icon={User} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Teacher Profiles:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.teacherProfiles.viewAll}</li>
          <li>{dict.teacherProfiles.addNew}</li>
          <li>{dict.teacherProfiles.assignSubjects}</li>
          <li>{dict.teacherProfiles.performanceReviews}</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Non-Teaching Staff:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.nonTeachingStaff.viewAll}</li>
          <li>{dict.nonTeachingStaff.addNew}</li>
          <li>{dict.nonTeachingStaff.assignRoles}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Schedules:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.schedules.viewTeacherSchedules}</li>
          <li>{dict.schedules.generateTimetable}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
