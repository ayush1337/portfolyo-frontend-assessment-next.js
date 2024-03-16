import { Poppins } from 'next/font/google';
import '@/assets/css/tailwind.css';
import '@/assets/css/materialdesignicons.min.css';
import { PortfolioWrapper } from '@/components/PortfolioContext';
import Switcher from '@/components/Switcher';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata = {
  title: 'John Doe : Portfolio',
  description: 'Portfolyo Frontend-Assessment in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (poppins.className,
          `text-base text-black dark:text-white dark:bg-slate-900`)
        }
      >
        <PortfolioWrapper>{children}</PortfolioWrapper>
        <Switcher />
      </body>
    </html>
  );
}
