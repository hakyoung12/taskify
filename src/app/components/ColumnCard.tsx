import Image from 'next/image';

interface ColumnCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignerNickname: string;
  assignerProfileUrl: string;
}

export default function ColumnCard({
  imageUrl,
  title,
  tags,
  dueDate,
  assignerNickname,
  assignerProfileUrl,
}: ColumnCardProps) {
  return (
    <>
      <div className='bg-white rounded-md border border-gray-_d9d9d9 flex flex-col justify-center p-[20px] gap-[10px]'>
        {imageUrl && (
          <Image
            width={274}
            height={160}
            className='h-[160px] object-cover rounded-md'
            src={imageUrl}
            alt=''
          />
        )}
        <span>{title}</span>
        <div className='flex gap-[6px]'>
          {tags.map((tag: any, index: number) => {
            return (
              <div
                className='bg-[#F9EEE3] rounded text-[#D58D49] text-[12px] px-[6px] py-[4px]'
                key={index}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className='flex text-gray-_787486 text-[12px] relative flex justify-between justify-center items-center'>
          <div className='flex gap-[6px]'>
            <img src='/images/calender-icon.svg' alt='캘린더 아이콘' />
            <span>{dueDate}</span>
          </div>
          <Image
            width={24}
            height={24}
            className='object-cover'
            src={assignerProfileUrl}
            alt='프로필 이미지 테스트'
          />
        </div>
      </div>
    </>
  );
}
