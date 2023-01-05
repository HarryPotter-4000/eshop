import { Avatar } from '@mui/material';

function AvatarIcon() {
  return (
    <Avatar
      sx={{
        backgroundColor: 'inherit',
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
          color: '#e91e63',
          transition: 'all 0.8s ease-out',
        },
      }}
    >
      N
    </Avatar>
  );
}
export default AvatarIcon;
