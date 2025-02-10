import CardWrapper from '@//components/dashboard/card-wrapper';
import { CreditCard } from 'lucide-react';

interface FeeManagementProps {
  dict: {
    title: string;
    viewFees: string;
    makePayments: string;
    reminders: string;
    feeDetails: Array<{
      term: string;
      amount: string;
      dueDate: string;
      status: string;
    }>;
  };
}

export default function FeeManagement({ dict }: FeeManagementProps) {
  return (
    <CardWrapper icon={CreditCard} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.viewFees}</li>
        <li>{dict.makePayments}</li>
        <li>{dict.reminders}</li>
      </ul>
      <h3 className="font-medium mt-4">Fee Details:</h3>
      <ul className="space-y-4">
        {dict.feeDetails.map((fee, index) => (
          <li key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <strong>{fee.term}</strong> - {fee.amount}, Due: {fee.dueDate},
            Status: {fee.status}
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}
