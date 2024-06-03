'use client';

import LandingHeader from './components/LandingHeader';
import LandingMain from './components/LadingMain';
import LandingFooter from './components/LandingFooter';
import { redirect } from 'next/navigation';
import { LOGIN_TOKEN } from '../app/api/apiStrings';

function checkToken() {
  if (typeof window === undefined) return;
  return window.localStorage.getItem(LOGIN_TOKEN);
}

export default function Home() {
  const userToken = checkToken();
  if (userToken) redirect('/mydashboard');
  return (
    <div className='bg-custom_black-_000000 text-custom_white'>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}
