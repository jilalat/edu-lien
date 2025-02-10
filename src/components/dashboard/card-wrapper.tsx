import { Card } from '@//components/ui/card';

interface CardWrapperProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export default function CardWrapper({
  icon: Icon,
  title,
  children,
}: CardWrapperProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-8">
        <Icon className="h-5 w-5 text-primary dark:text-gray-300" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </Card>
  );
}
