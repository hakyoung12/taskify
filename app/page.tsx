import LandingFooter from '@/components/LandingFooter';
import LandingHeader from '@/components/LandingHeader';
import LandingMain from '@/components/LadingMain';

export default function Home() {
  return (
    <div className='bg-custom_black-_000000 text-custom_white'>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}
