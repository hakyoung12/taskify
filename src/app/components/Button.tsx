export function WhiteButton({ title }: { title: string }) {
  return (
    <button className='flex w-21 h-8 px-7 py-1.5 justify-center items-center gap-2.5 flex-shrink-0 rounded border border-gray-D9D9D9 bg-white text-violet-_5534da text-sm font-Pretendard text-base font-medium max-sm:w-[52px] max-sm:text-xs max-sm:px-2'>
      {title}
    </button>
  );
}
