import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  ChannelDetails,
  SearchFeed,
  VideoDeatails,
} from "./components/main";
import "./App.css";

const App = () => (
  <Box className="box">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="*" element={<Feed />} />
      <Route exact path="/vidmax" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDeatails />} />
      <Route path="/channel/:id" element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
);
export default App;
