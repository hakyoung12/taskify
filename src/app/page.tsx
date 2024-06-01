import LandingHeader from './components/LandingHeader';
import LandingMain from './components/LadingMain';
import LandingFooter from './components/LandingFooter';

export default function Home() {
  return (
    <div className='bg-custom_black-_000000 text-custom_white'>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}
