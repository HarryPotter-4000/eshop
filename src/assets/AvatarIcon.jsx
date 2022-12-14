import { Avatar } from "@mui/material";

function AvatarIcon() {
  return (
    <Avatar
      sx={{
        backgroundColor: "inherit",
        color: "#fff",
        fontWeight: "400",
        border: "2px solid",
        borderColor: "transparent",
        borderRadius: "50%",
        "&:hover": {
          borderColor: "white",
          transition: "all 0.3s ease-out",
        },
      }}
    >
      N
    </Avatar>
  );
}
export default AvatarIcon;
