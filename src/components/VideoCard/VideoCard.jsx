import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";
import "./VideoCard.css";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      className="card"
      sx={{
        width: { md: "320px", xs: "320px" },
        boxShadow: "none",
        borderRadius: "0",
        margin: "5px",
        overflow: "hidden",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="Box">
          <CardMedia
            className="cardImg"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: "100%", height: 180 }}
          />
        </div>
      </Link>
      <CardContent
        sx={{ backgroundColor: "#403a3e", height: "60px", Width: "100%" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            className="title"
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? snippet?.channelId : demoChannelUrl}>
          <Typography variant="subtitle2" color="#be5869">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: "12px", color: "#be5869", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
