import LandingFooter from '@/components/LandingFooter';
import LandingHeader from '@/components/LandingHeader';
import LandingMain from '@/components/LadingMain';

export default function Home() {
  return (
    <div className='bg-black-_000000 text-white'>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}
