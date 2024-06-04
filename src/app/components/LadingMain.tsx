import Image from 'next/image';
import Link from 'next/link';
import Card from './LandingCard';

export default function LandingMain() {
  const DASH_INFO = '대시보드 사진과 이름을 변경할 수 있어요.';
  const INVITE_INFO = '새로운 팀원을 초대할 수 있어요.';
  const MEMBER_INFO = '구성원을 초대하고 내보낼 수 있어요.';
  return (
    <main className='px-10 flex flex-col items-center'>
      <div className='flex flex-col items-center pt-[94px]'>
        <div className='relative w-[722px] h-[422px] max-xl:w-[537px] max-xl:h-[315px] max-sm:w-[287px] max-sm:h-[168px]'>
          <Image
            src='/LandingPage/topImage.png'
            alt='소개 페이지'
            fill
            priority
            sizes='75vw'
          />
        </div>
        <h2 className='flex items-center gap-x-7 pt-12 max-xl:gap-x-6 max-md:flex-col max-sm:gap-y-[5px]'>
          <span className='text-[76px] leading-[100px] tracking-[-2px] font-bold max-xl:text-[56px] max-sm:text-[40px] max-sm:leading-normal'>
            새로운 일정 관리
          </span>
          <strong className='text-custom_violet-_5534da text-[90px] leading-[65px] tracking-[-1px] max-xl:text-[70px] max-sm:text-[42px]'>
            Taskify
          </strong>
        </h2>
        <span className='text-lg pt-6'>서비스의 메인 설명 들어갑니다.</span>
        <Link
          href='/login'
          className='w-[280px] h-[50px] pt-[15px] mt-[66px] pb-3.5 bg-custom_violet-_5534da rounded-lg justify-center items-center inline-flex'
        >
          <div className='text-center text-lg font-medium'>로그인하기</div>
        </Link>
      </div>
      <div className='relative rounded-lg mt-[184px] w-[1200px] h-[600px] bg-custom_black-_171717 max-xl:w-[100%] max-xl:h-[972px] max-sm:h-[686px] max-sm:mt-[80px]'>
        <h3 className='mt-[123px] ml-[60px] flex flex-col gap-y-[100px] max-xl:mt-[63px] max-sm:mt-[60px] max-sm:items-center max-sm:ml-0 max-sm:gap-y-[61px] max-sm:text-center'>
          <span className='text-custom_gray-_9fa6b2 text-[22px] font-medium max-sm:text-lg'>
            Point 1
          </span>
          <span className='text-[48px] font-bold lading-[64px] w-[360px] max-sm:text-[36px] max-sm:leading-[50px] max-sm:w-[270px]'>
            일의 우선순위를 관리하세요
          </span>
        </h3>
        <div className='absolute right-0 bottom-0 w-[594px] h-[497px] max-xl:w-[519px] max-xl:h-[435px] max-sm:w-[296px] max-sm:h-[248px]'>
          <Image
            src='/LandingPage/orderToDo.png'
            alt='우선순위'
            fill
            sizes='75vw'
            priority
          />
        </div>
      </div>
      <div className='flex flex-row-reverse justify-end rounded-lg mt-[90px] w-[1200px] h-[600px] bg-custom_black-_171717 max-xl:flex-col max-xl:justify-between max-xl:w-[100%] max-xl:h-[972px] max-sm:h-[686px] max-sm:mt-[59px]'>
        <h3 className='mt-[123px] ml-[100px] flex flex-col gap-y-[100px] max-xl:ml-[60px] max-xl:mt-[63px] max-sm:mt-[60px] max-sm:items-center max-sm:ml-0 max-sm:gap-y-[61px] max-sm:text-center'>
          <span className='text-custom_gray-_9fa6b2 text-[22px] font-medium max-sm:text-lg'>
            Point 2
          </span>
          <span className='text-[48px] font-bold lading-[64px] w-[320px] max-sm:text-[36px] max-sm:leading-[50px] max-sm:w-[240px]'>
            해야 할 일을 등록하세요
          </span>
        </h3>
        <div className='relative w-[436px] h-[502px] mt-[98px] ml-[108px] border-0 overflow-hidden rounded-t-lg max-xl:w-[360px] max-xl:h-[415px] max-sm:w-[217px] max-sm:h-[205px] self-end max-xl:self-center max-xl:ml-0'>
          <Image
            src='/LandingPage/createToDo.png'
            alt='할 일 등록'
            fill
            sizes='50vw'
          />
        </div>
      </div>
      <div className='mt-[90px] max-w-[1200px] w-[100%]'>
        <h3 className='font-bold text-[28px] leading-[33px] max-xl:text-center max-sm:text-[22px] max-sm:leading-[26px]'>
          생산성을 높이는 다양한 설정 ⚡
        </h3>
        <div className='mt-9 flex gap-x-[33px] items-center max-xl:flex-col max-xl:gap-y-12 max-sm:gap-y-10 max-sm:mt-[42px] '>
          <Card name='대시보드 설정' info={DASH_INFO}>
            <div className='relative w-[300px] h-[124px] max-sm:w-[260px] max-sm:h-[107px]'>
              <Image
                src='/LandingPage/dashboard.png'
                alt=''
                fill
                sizes='33vw'
              />
            </div>
          </Card>
          <Card name='초대' info={INVITE_INFO}>
            <div className='relative w-[300px] h-[231px] max-sm:w-[260px] max-sm:h-[200px]'>
              <Image src='/LandingPage/invite.png' alt='' fill sizes='33vw' />
            </div>
          </Card>
          <Card name='구성원' info={MEMBER_INFO}>
            <div className='relative w-[300px] h-[195px] max-sm:w-[260px] max-sm:h-[179px]'>
              <Image src='/LandingPage/members.png' alt='' fill sizes='33vw' />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
