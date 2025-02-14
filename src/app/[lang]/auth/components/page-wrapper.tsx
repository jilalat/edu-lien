import React, { ReactNode } from 'react';

interface PageWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function PageWrapper({
  title,
  description,
  children,
}: PageWrapperProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          {description}
        </p>
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">{children}</div>
    </div>
  );
}
