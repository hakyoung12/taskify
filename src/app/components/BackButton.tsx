import Image from 'next/image';
import Link from 'next/link';

interface BackButtonProps {
  link: string;
}

export default function BackButton({ link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className='flex items-center gap-2 text-base font-medium text-custom_black-_333236 font-Pretendard'
    >
      <div className='relative w-5 h-5'>
        <Image fill src='/images/leftArrowButton.svg' alt='대시보드 바로가기' />
      </div>
      돌아가기
    </Link>
  );
}
