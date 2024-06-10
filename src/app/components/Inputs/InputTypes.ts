export type Assignee = {
  id?: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isOwner?: boolean;
};

export interface Datas {
  assignee: Assignee;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

export type SetData = (data: {
  [key: string]: string | Assignee | string[];
}) => void;
