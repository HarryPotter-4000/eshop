import FaceIcon from '@mui/icons-material/Face';

function UserIcon() {
  return (
    <FaceIcon
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
    ></FaceIcon>
  );
}
export default UserIcon;
