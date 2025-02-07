import { Card } from '@/components/ui/card';
import {
  BarChart3,
  DollarSign,
  GraduationCap,
  School,
  Users,
} from 'lucide-react';

type DictKey =
  | 'totalStudents'
  | 'totalTeachers'
  | 'totalParents'
  | 'averageAttendance'
  | 'activeClasses'
  | 'pendingFeePayments';

interface StatsOverviewProps {
  dict: {
    totalStudents: string;
    totalTeachers: string;
    totalParents: string;
    averageAttendance: string;
    activeClasses: string;
    pendingFeePayments: string;
  };
}

interface StatItem {
  label: string;
  key: DictKey;
  icon: React.ComponentType<any>;
}

const stats: StatItem[] = [
  { label: 'Total Students', key: 'totalStudents', icon: Users },
  { label: 'Total Teachers', key: 'totalTeachers', icon: GraduationCap },
  { label: 'Total Parents', key: 'totalParents', icon: Users },
  { label: 'Active Classes', key: 'activeClasses', icon: School },
  {
    label: 'Average Attendance',
    key: 'averageAttendance',
    icon: BarChart3,
  },
  { label: 'Pending Fees', key: 'pendingFeePayments', icon: DollarSign },
];

export default function StatsOverview({ dict }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {stats.map(({ label, key, icon: Icon }) => (
        <Card key={key} className="p-4">
          <div className="flex items-center space-x-2">
            <Icon className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-sm text-muted-foreground">{label}</h3>
              <strong className="text-2xl font-bold">{dict[key]}</strong>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
