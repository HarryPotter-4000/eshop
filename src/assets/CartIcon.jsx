import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartIcon() {
  return (
    <ShoppingCartIcon
      fontSize="medium"
      sx={{
        backgroundColor: 'inherit',
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
          color: '#e91e63',
          transition: 'all 0.8s ease-out',
        },
      }}
    ></ShoppingCartIcon>
  );
}
export default CartIcon;
