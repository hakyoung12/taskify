import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface CustomAvatarProps {
  assignerProfileUrl: string | null;
  assignerNickname: string;
}

export default function CustomAvatar({
  assignerProfileUrl,
  assignerNickname,
}: CustomAvatarProps) {
  return (
    <div>
      <Avatar className='w-[24px] h-[24px]'>
        {assignerProfileUrl ? (
          <AvatarImage
            src={assignerProfileUrl}
            alt='Profile Image'
            className='object-cover'
          />
        ) : (
          <>
            <AvatarImage />
            <AvatarFallback className='bg-custom_green-_a3c4a2 text-white justify-center items-center'>
              {assignerNickname[0].toUpperCase()}
            </AvatarFallback>
          </>
        )}
      </Avatar>
    </div>
  );
}
