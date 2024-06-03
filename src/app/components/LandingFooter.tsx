import Image from 'next/image';
import Link from 'next/link';

export default function LandingFooter() {
  return (
    <footer className='flex justify-center items-center h-[100px] mt-[160px] text-custom_gray-_9fa6b2 max-sm:text-xs max-sm:h-[216px] max-sm:items-start max-sm:mt-[120px]'>
      <div className='flex justify-between items-center px-10 max-w-[1720px] w-[100%] max-sm:flex-col'>
        <div className='max-sm:mb-3'>@codeit-2023</div>
        <div className='flex gap-8 max-sm:gap-5 max-sm:mb-[68px]'>
          <Link href='https://www.naver.com/'>Privacy Policy</Link>
          <Link href='https://www.naver.com/'>FAQ</Link>
        </div>
        <div className='flex items-center gap-3.5 max-sm:gap-5'>
          <Link
            href='https://www.naver.com/'
            className='relative w-5 h-5 max-sm:w-4 max-sm:h-4'
          >
            <Image src='/LandingPage/footerEmail.svg' alt='이메일' fill />
          </Link>
          <Link
            href='https://www.facebook.com/'
            className='relative w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]'
          >
            <Image src='/LandingPage/footerFacebook.svg' alt='페이스북' fill />
          </Link>
          <Link
            href='https://www.instagram.com/'
            className='relative w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]'
          >
            <Image
              src='/LandingPage/footerInstagram.svg'
              alt='인스타그램'
              fill
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
