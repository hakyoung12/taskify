import './globals.css';
import { ModalProvider } from '../context/ModalContext';
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
          {children}
          <CommonModal />
        </ModalProvider>
      </body>
    </html>
  );
}
