import CardWrapper from '@/components/dashboard/card-wrapper';
import { CreditCard } from 'lucide-react';

interface FeeCollectionProps {
  dict: {
    title: string;
    feeDetails: Array<{
      term: string;
      totalAmount: string;
      collectedAmount: string;
      pendingAmount: string;
    }>;
    actions: Array<string>;
    financialReports: {
      dailyCollection: string;
      monthlyCollection: string;
      outstandingFees: string;
    };
  };
}

export default function FeeCollection({ dict }: FeeCollectionProps) {
  return (
    <CardWrapper icon={CreditCard} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Fee Details:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.feeDetails.map((fee, index) => (
            <li key={index}>
              <strong>{fee.term}:</strong> Total: {fee.totalAmount}, Collected:{' '}
              {fee.collectedAmount}, Pending: {fee.pendingAmount}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Actions:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Financial Reports:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.financialReports.dailyCollection}</li>
          <li>{dict.financialReports.monthlyCollection}</li>
          <li>{dict.financialReports.outstandingFees}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
