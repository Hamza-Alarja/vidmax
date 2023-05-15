import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard, ChannelDetails } from "../main";
import { FetchApi } from "../../utils/FetchApi";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );

    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "300px",
            background: "linear-gradient(#403a3e, #be5869); 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard ChannelDetails={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
