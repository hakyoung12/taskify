import Image from 'next/image';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <nav className='sticky top-0 z-10 bg-black-_000000 flex flex-row justify-between items-center pt-5 pb-[17px] pl-[26px] pr-20 max-lg:pr-10 '>
      <Link href='/'>
        <h1 className='flex items-center'>
          <div className='w-[24px] sm:w-[29px]'>
            <Image
              src='/LandingPage/logoWhite.svg'
              width={29}
              height={33}
              layout='responsive'
              alt='taskify'
            />
          </div>
          <div className='pt-0.5 hidden sm:block'>
            <Image
              src='/LandingPage/taskifyWhite.svg'
              width={80}
              height={22}
              alt=''
            />
          </div>
        </h1>
      </Link>
      <div className='flex gap-9 text-base max-sm:text-sm max-sm:gap-[20px]'>
        <Link href='/login' className=''>
          로그인
        </Link>
        <Link href='/signup'>회원가입</Link>
      </div>
    </nav>
  );
}
