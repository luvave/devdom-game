import { ReactNode } from 'react';

interface Props {
  children: ReactNode,
}

export const PageContainer = ({ children }: Props) => (
  <div className="container mx-auto">
    {children}
  </div>
);
