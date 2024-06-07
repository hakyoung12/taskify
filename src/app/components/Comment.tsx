import { ChangeEvent, useState } from 'react';

interface Comment {
  index: number;
  id: number;
  setSelectedId: any;
  createdAt: string;
  content: string;
  isEditing: Boolean;
}

const Comment = ({
  id,
  setSelectedId, // onEdit
  createdAt,
  content,
  isEditing,
}: Comment) => {
  const [value, setValue] = useState(content);

  const handleOnClick = () => {
    setSelectedId(id);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedId(undefined);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className='text-[14px]'>
      <div className='mt-[6px] flex items-center gap-[8px]'>
        <span className='font-semibold'>장만철</span>
        <span className='text-[12px] text-[#9FA6B2]'>{createdAt}</span>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            className='rounded-md border p-[5px]'
            onChange={handleChange}
          />
        </form>
      ) : (
        <p>{value}</p>
      )}
      <div className='mt-[3px] flex gap-[10px] text-[10px] text-[#9FA6B2] underline'>
        <button onClick={handleOnClick}>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Comment;
