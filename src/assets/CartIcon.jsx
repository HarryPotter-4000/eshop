import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartIcon() {
  return (
    <ShoppingCartIcon
      fontSize="medium"
      sx={{
        backgroundColor: "inherit",
        color: "#fff",
        fontWeight: "400",
        border: "2px solid",
        borderColor: "transparent",
        padding: "8px",
        borderRadius: "50%",
        "&:hover": {
          borderColor: "white",
          transition: "all 0.3s ease-out",
        },
      }}
    >
      N
    </ShoppingCartIcon>
  );
}
export default CartIcon;
