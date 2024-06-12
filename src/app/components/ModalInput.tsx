import { ChangeEvent } from 'react';

/* ex)
  <ModalInput
    labelName='이름'
    inputId='title'
    placeFolder={title}
    value={value}
    setValue={setValue}
  />
 */

const ModalInput = ({
  labelName,
  inputId,
  placeFolder,
  value,
  setValue,
  error,
}: {
  labelName: string;
  inputId: string;
  placeFolder: string;
  value: any;
  setValue: any;
  error?: any;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
  };

  return (
    <div className='mt-[32px]'>
      <label
        htmlFor={inputId}
        className='text-[18px] text-custom_black-_333236'
      >
        {labelName}
      </label>
      <input
        id={inputId}
        value={value}
        className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 px-4 py-4'
        onChange={handleChange}
        placeholder={placeFolder}
      />
      {error}
    </div>
  );
};

export default ModalInput;
