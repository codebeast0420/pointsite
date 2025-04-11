import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="max-md:px-2 mx-auto my-0 bg-white max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      {children}
    </main>
  );
};