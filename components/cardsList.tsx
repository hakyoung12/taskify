import Image from 'next/image';

export default function CardsList({
  cardsMockDataByColumnId,
}: {
  cardsMockDataByColumnId: any[];
}) {
  return (
    <>
      <div className='bg-white rounded-md border border-gray-_d9d9d9 flex flex-col justify-center p-[20px] gap-[10px]'>
        <Image
          width={274}
          height={160}
          className='h-[160px] object-cover rounded-md'
          src='/images/card-image-test.jpg'
          alt=''
        />
        <span>새로운 일정 관리 Taskify</span>
        <div className='flex gap-[6px]'>
          <div className='bg-[#F9EEE3] rounded text-[#D58D49] text-[12px] px-[6px] py-[4px]'>
            프로젝트
          </div>
          <div className='bg-[#F7DBF0] rounded text-[#D549B6] text-[12px] px-[6px] py-[4px]'>
            백엔드
          </div>
        </div>
        <div className='flex text-gray-_787486 text-[12px] relative flex justify-between justify-center items-center'>
          <div className='flex gap-[6px]'>
            <img src='/images/calender-icon.svg' alt='캘린더 아이콘' />
            <span>2022.12.31</span>
          </div>
          <Image
            width={24}
            height={24}
            className='object-cover'
            src='/images/profile-test.jpeg'
            alt='프로필 이미지 테스트'
          />
        </div>
      </div>
      <div className='bg-white rounded-md border border-gray-_d9d9d9 flex flex-col justify-center p-[20px] gap-[10px]'>
        <span>새로운 일정 관리 Taskify</span>
        <div className='flex gap-[6px]'>
          <div className='bg-[#F9EEE3] rounded text-[#D58D49] text-[12px] px-[6px] py-[4px]'>
            프로젝트
          </div>
          <div className='bg-[#F7DBF0] rounded text-[#D549B6] text-[12px] px-[6px] py-[4px]'>
            백엔드
          </div>
        </div>
        <div className='flex text-gray-_787486 text-[12px] relative flex justify-between justify-center items-center'>
          <div className='flex gap-[6px]'>
            <img src='/images/calender-icon.svg' alt='캘린더 아이콘' />
            <span>2022.12.31</span>
          </div>
          <Image
            width={24}
            height={24}
            className='object-cover'
            src='/images/profile-test.jpeg'
            alt='프로필 이미지 테스트'
          />
        </div>
      </div>
    </>
  );
}
{
  /* {cardsMockDataByColumnId.map((card: any, index: number) => (
  <div
	key={index}
	className='bg-white rounded-md border border-gray-300 flex justify-center items-center'
  >
	하이하이
  </div>
))} */
}
