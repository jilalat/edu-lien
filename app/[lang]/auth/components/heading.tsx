interface AuthHeadingProps {
  title: string;
  description: string;
}

export default function Heading({ title, description }: AuthHeadingProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        {description}
      </p>
    </>
  );
}
