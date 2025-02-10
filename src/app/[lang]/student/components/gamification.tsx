import { ReactElement } from 'react';

interface GamificationItem {
  title: string;
  description: string;
}

interface GamificationCardsProps {
  dict: Record<string, GamificationItem>;
}

export default function GamificationCards({
  dict,
}: GamificationCardsProps): ReactElement {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(dict).map(([key, gamificationItem]) => (
        <article
          key={key}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
        >
          <header className="mb-4">
            <h3 className="text-xl font-bold text-primary">
              {gamificationItem.title}
            </h3>
          </header>
          <div>
            <p className="text-gray-600">{gamificationItem.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
