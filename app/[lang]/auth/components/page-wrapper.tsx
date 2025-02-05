import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode[];
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [content, lastChild] = [
    children.slice(0, -1),
    children[children.length - 1],
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="flex flex-col justify-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-700">
        {content}
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        {lastChild}
      </div>
    </div>
  );
}
