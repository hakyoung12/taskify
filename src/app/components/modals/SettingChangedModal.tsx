const SettingChangedModal = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-col w-[540px] h-[250px] items-center gap-[45px] max-sm:w-[327px]'>
      <p className='mt-[108px] mb-4 text-lg max-sm:mx-6 max-sm:w-full max-sm:mx-auto max-sm:text-center'>
        {text}
      </p>
      <button className='px-[46px] py-3.5 bg-custom_violet-_5534da text-base text-white rounded ml-auto max-sm:mx-auto'>
        확인
      </button>
    </div>
  );
};

export default SettingChangedModal;
