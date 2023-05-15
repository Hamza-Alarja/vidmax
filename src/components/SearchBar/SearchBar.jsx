import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";


import "./SearchBar.css";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSupmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSupmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 5,
        boxShadow: "none",
        mr: { sm: 5 },
        height: 40,
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ border: "none" }}
      />
      <IconButton tybe="submit" sx={{ p: "10px", color: "#be5869" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
