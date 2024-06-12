'use client';

import CommentsList from '../ToDoCardModal/CommentsList';
import CardHeader from '../ToDoCardModal/CardHeader';
import CardInfo from '../ToDoCardModal/CardInfo';
import CommentInput from '../ToDoCardModal/CommentInput';
import CardContents from '../ToDoCardModal/CardContents';
import { useEffect, useState } from 'react';
import { getCommentsByCardId } from '../ToDoCardModal/api';
import EditCardModal from './EditCardModal';

interface assigner {
  profileImageUrl?: string;
  nickname: string;
  id: number;
}

export default function ToDoCardModal({
  dashboardId,
  columnId,
  title,
  description,
  tags,
  dueDate,
  assigner,
  imageUrl,
  cardId,
}: {
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  imageUrl?: string;
  assigner: assigner;
  cardId: number;
}) {
  const [comments, setComments] = useState<string[]>([]);

  const fetchComments = async () => {
    try {
      const res = await getCommentsByCardId(cardId);
      setComments(res.comments);
    } catch (error: any) {
      console.log(error);
    }
  };

  // console.log(comments);
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='flex w-[682px] flex-col gap-[24px] p-[4px] max-xl:w-[632px] max-sm:w-full max-sm:gap-[16px]'>
      <CardHeader cardId={cardId} title={title} />
      {/* 컨텐츠 */}
      <div className='flex gap-[24px] max-sm:flex-col'>
        <div className='flex w-[450px] flex-col gap-[16px] max-xl:w-[420px] max-sm:order-2 max-sm:w-full'>
          <CardContents
            imageUrl={imageUrl}
            description={description}
            tags={tags}
          />
          <CommentInput
            columnId={columnId}
            dashboardId={dashboardId}
            cardId={cardId}
          />
          {comments && <CommentsList comments={comments} />}
        </div>
        <CardInfo assignee={assigner} dueDate={dueDate} />
      </div>
      <EditCardModal
        cardId={cardId}
        columnId={columnId}
        dashboardId={dashboardId}
        loginToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU4NCwidGVhbUlkIjoiNS05IiwiaWF0IjoxNzE4MTgwNTU5LCJpc3MiOiJzcC10YXNraWZ5In0.VP2eOJcQ95vH5y4ORqdw9fBsfjKi4xor-yVQH2UqsYk'
      />
    </div>
  );
}
