import { useState } from 'react';

export function useForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  return {
    email,
    setEmail,
    isLoading,
    handleSubmit,
  };
}
