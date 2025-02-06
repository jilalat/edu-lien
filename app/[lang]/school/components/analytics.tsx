import CardWrapper from '@/components/dashboard/card-wrapper';
import { TrendingUp } from 'lucide-react';

interface AnalyticsProps {
  dict: {
    title: string;
    metrics: Array<{
      name: string;
      charts: Array<string>;
      description: string;
    }>;
    automatedReports: {
      dailyReport: string;
      weeklyReport: string;
      monthlyReport: string;
      customReport: string;
    };
  };
}

export default function Analytics({ dict }: AnalyticsProps) {
  return (
    <CardWrapper icon={TrendingUp} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Metrics:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.metrics.map((metric, index) => (
            <li key={index}>
              <strong>{metric.name}:</strong> {metric.description}
              <ul className="ml-4 list-disc space-y-1">
                {metric.charts.map((chart, chartIndex) => (
                  <li key={chartIndex}>{chart}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Automated Reports:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.automatedReports.dailyReport}</li>
          <li>{dict.automatedReports.weeklyReport}</li>
          <li>{dict.automatedReports.monthlyReport}</li>
          <li>{dict.automatedReports.customReport}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
