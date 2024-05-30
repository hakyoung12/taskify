import paginationRight from '../../public/paginationRight.svg';
import paginationLeft from '../../public/paginationLeft.svg';
import Image from 'next/image';

export default function Pagination() {
  return (
    <div>
      <button className="w-10 h-10">
        <Image src={paginationLeft} alt="이전 페이지" />
      </button>
      <button className="w-10 h-10">
        <Image src={paginationRight} alt="다음 페이지" />
      </button>
    </div>
  );
}
