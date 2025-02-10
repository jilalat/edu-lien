import { ReactElement } from 'react';

interface SectionItem {
  title: string;
  description: string;
}

interface ListSectionProps {
  dict: Record<string, SectionItem>;
}

export default function ListSection({ dict }: ListSectionProps): ReactElement {
  return (
    <div>
      <ul className="space-y-2">
        {Object.entries(dict).map(([key, item]) => (
          <li key={key} className="flex items-center gap-2">
            <strong className="font-medium">{item.title}: </strong>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
