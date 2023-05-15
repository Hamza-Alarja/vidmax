import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import "./Navbar.css";
import SearchBar from "./../SearchBar/SearchBar";
import { YouTube } from "@mui/icons-material";
const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "fixedTop",
          top: 0,
          background: "#rgb(44, 44, 44)",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <YouTube
            src={logo}
            alt="logo"
            style={{ fontSize: "50px", color: "#be5869" }}
          />
          <h1
            style={{ marginLeft: "5px", fontWeight: "bold", color: "#be5869" }}
          >
            VidMax
          </h1>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
};

export default Navbar;
