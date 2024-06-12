import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { DashboardDataProvider } from '@/context/DashboardDataContext';
import CommonModal from './components/modals/CommonModal';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <ModalProvider>
          <DashboardDataProvider>
            {children}
            <CommonModal />
          </DashboardDataProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
