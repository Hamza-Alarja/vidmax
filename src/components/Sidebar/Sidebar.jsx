import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";
import "./Sidebar.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { sm: "row", md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#be5869 ",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#be5869 ",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacty: category.name === selectedCategory ? "1" : "0.8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
