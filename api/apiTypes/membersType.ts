/**대시보드 멥버 목록 조회 */
export interface CheckMembersRes {
  members: {
    id: number;
    userId: number;
    email: string;
    nickname: string;
    profileImageUrl?: string;
    createdAt: string;
    updatedAt: string;
    isOwner: boolean;
  }[];
  totalCount: number;
}
