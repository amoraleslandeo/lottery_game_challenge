import Image from 'next/image'
import Link from 'next/link';
import type { Metadata } from "next";
import Footer from '@/components/Footer/Footer';
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Divider from '@mui/material/Divider';

export const metadata: Metadata = {
  title: "LottoBillions",
  description: "Challenge",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <header className='header'>
            <Link href='/' passHref>
              <Image
                src='/lotto_billions.webp'
                alt='Lotto Billions'
                width={250}
                height={68}
                priority
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </header>
          <Divider />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
export default RootLayout