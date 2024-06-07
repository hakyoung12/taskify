export function DeleteButton({ title }: { title: string }) {
  return (
    <button className='w-21 border-gray-D9D9D9 text-violet-_5534da font-Pretendard flex h-8 flex-shrink-0 items-center justify-center gap-2.5 rounded border bg-white px-7 py-1.5 text-base text-sm font-medium max-sm:w-[52px] max-sm:px-2 max-sm:text-xs'>
      {title}
    </button>
  );
}
