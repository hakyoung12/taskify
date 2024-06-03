import Image from 'next/image';
import Link from 'next/link';
interface BackButtonProps {
  link: string;
}
export default function BackButton({ link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className='flex items-center gap-[6px] text-black-_333236 font-pretendard text-base font-medium leading-normal'
    >
      <div className='relative w-5 h-5'>
        <Image fill src='/images/leftArrowButton.svg' alt='돌아가기 버튼' />
      </div>
      돌아가기
    </Link>
  );
}
