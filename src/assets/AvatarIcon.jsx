import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserIcon() {
  return (
    <AccountCircleIcon
      fontSize="large"
      sx={{
        backgroundColor: 'inherit',
        color: '#fff',
        fontSize: 30,
        '&:hover': {
          color: '#e91e63',
          transition: 'all 0.8s ease-out',
        },
      }}
    ></AccountCircleIcon>
  );
}
export default UserIcon;
