interface DashboardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DashboardWrapper({
  title,
  description,
  children,
}: DashboardWrapperProps) {
  return (
    <div className="container py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold"> {title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
