import AuthLogo from '@/app/components/AuthLogo';
import LoginForm from '@/app/components/LoginForm';
import Link from 'next/link';
import SignupForm from '../components/SignupForm';

export default function Login() {
  return (
    <div className='bg-custom_gray-_fafafa text-custom_black-_333236 flex flex-col items-center pt-[60px] min-h-[100vh]'>
      <AuthLogo>첫 방문을 환영합니다!</AuthLogo>
      <SignupForm />
      <span className='mt-6 leading-[19px] pb-16'>
        이미 가입하셨나요?{' '}
        <Link href='/login' className='underline text-custom_violet-_5534da'>
          로그인 하기
        </Link>
      </span>
    </div>
  );
}
