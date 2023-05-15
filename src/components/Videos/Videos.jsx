import { Stack, Box } from "@mui/material";

import ChannelCard from "../channelCard/ChannelCard";
import VideoCard from "./../VideoCard/VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Lodaing...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard ChannelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
