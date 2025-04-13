import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="max-md:px-2 mx-auto my-0 bg-white flex flex-col items-center">
      {children}
    </main>
  );
};