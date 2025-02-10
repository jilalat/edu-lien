import { Button } from '@//components/ui/button';
import {
  AlertTriangle,
  Award,
  BarChart2,
  Bell,
  Calendar as CalendarIcon,
  CheckSquare,
  DollarSign,
  File as FileIcon,
  FileText,
  GraduationCap,
  MessageSquare,
  UserPlus,
} from 'lucide-react';

interface QuickActionsProps {
  dict: {
    addNewStudent: string;
    addNewTeacher: string;
    sendAnnouncement: string;
    generateReport: string;
    viewAttendanceSummary: string;
    managePendingFees: string;
    scheduleEvent: string;
    assignTaskToStaff: string;
    monitorStudentPerformance: string;
    approveLeaveRequests: string;
    updateSchoolPolicies: string;
    viewParentFeedback: string;
    trackExtracurricularActivities: string;
    sendEmergencyAlerts: string;
  };
}

type DictKey =
  | 'addNewStudent'
  | 'addNewTeacher'
  | 'sendAnnouncement'
  | 'generateReport'
  | 'viewAttendanceSummary'
  | 'managePendingFees'
  | 'scheduleEvent'
  | 'assignTaskToStaff'
  | 'monitorStudentPerformance'
  | 'approveLeaveRequests'
  | 'updateSchoolPolicies'
  | 'viewParentFeedback'
  | 'trackExtracurricularActivities'
  | 'sendEmergencyAlerts';

interface QuickActionsItem {
  key: DictKey;
  icon: React.ComponentType<any>;
  color: string;
}

const quickActions: QuickActionsItem[] = [
  {
    key: 'addNewStudent',
    icon: UserPlus,
    color: 'blue',
  },
  {
    key: 'addNewTeacher',
    icon: GraduationCap,
    color: 'green',
  },
  {
    key: 'sendAnnouncement',
    icon: Bell,
    color: 'yellow',
  },
  {
    key: 'generateReport',
    icon: FileText,
    color: 'purple',
  },
  {
    key: 'viewAttendanceSummary',
    icon: CalendarIcon,
    color: 'green',
  },
  {
    key: 'managePendingFees',
    icon: DollarSign,
    color: 'blue',
  },
  {
    key: 'scheduleEvent',
    icon: CalendarIcon,
    color: 'purple',
  },
  {
    key: 'assignTaskToStaff',
    icon: CheckSquare,
    color: 'green',
  },
  {
    key: 'monitorStudentPerformance',
    icon: BarChart2,
    color: 'purple',
  },
  {
    key: 'approveLeaveRequests',
    icon: FileIcon,
    color: 'yellow',
  },
  {
    key: 'updateSchoolPolicies',
    icon: FileText,
    color: 'blue',
  },
  {
    key: 'viewParentFeedback',
    icon: MessageSquare,
    color: 'purple',
  },
  {
    key: 'trackExtracurricularActivities',
    icon: Award,
    color: 'green',
  },
  {
    key: 'sendEmergencyAlerts',
    icon: AlertTriangle,
    color: 'blue', // Slightly darker for urgency
  },
];

export default function QuickActions({ dict }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {quickActions.map(({ key, icon: Icon, color }) => (
        <Button
          key={key}
          className={`h-auto py-4 bg-${color}-500 hover:opacity-90 text-white`}
        >
          <Icon className="mr-2 h-5 w-5" />
          {dict[key]}
        </Button>
      ))}
    </div>
  );
}
