import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center h-[100px] bg-black-_000000 text-gray-_9fa6b2 max-sm:text-xs max-sm:h-[216px] max-sm:items-start">
      <div className="flex justify-between items-center px-10 max-w-[1720px] w-[100%] max-sm:flex-col">
        <div className="max-sm:mb-3">@codeit-{YEAR}</div>
        <div className="flex gap-8 max-sm:gap-5 max-sm:mb-[68px]">
          <Link href="https://www.naver.com/">Privacy Policy</Link>
          <Link href="https://www.naver.com/">FAQ</Link>
        </div>
        <div className="flex items-center gap-3.5 max-sm:gap-5">
          <Link
            href="https://www.naver.com/"
            className="w-[20px] max-sm:w-[16px]"
          >
            <Image
              src="/LandingPage/footerEmail.svg"
              width={20}
              height={20}
              alt="이메일"
              layout="responsive"
            />
          </Link>
          <Link
            href="https://www.facebook.com/"
            className="w-[22px] max-sm:w-[18px]"
          >
            <Image
              src="/LandingPage/footerFacebook.svg"
              width={22}
              height={22}
              alt="페이스북"
              layout="responsive"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="w-[22px] max-sm:w-[18px]"
          >
            <Image
              src="/LandingPage/footerInstagram.svg"
              width={22}
              height={22}
              alt="인스타그램"
              layout="responsive"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
