import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos, video } from "./../main";
import { FetchApi } from "../../utils/FetchApi";

function VideoDeatails() {
  const { id } = useParams();

  const [videoDeatail, setvideoDeatail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    FetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDeatail(data.items[0])
    );
    FetchApi(`search?part=snippet&relatedToVideoId=${id}&tybe=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDeatail?.snippet) return "Lodaing...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDeatail;

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "colomn", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              style={{ marginTop: 10 }}
            />
            <Typography
              marginTop={3}
              color={"#FFF"}
              variant="h5"
              fontWeight={"bold"}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography color={"#fff"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.7, marginRight: 3 }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          px={2}
          marginTop={"5px"}
        >
          <Videos videos={videos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDeatails;
