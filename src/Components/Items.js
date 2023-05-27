import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { newItems } from "./Utils/Constants";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Items = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(999);
  const toggleLove = () => {
    setIsClicked(!isClicked);
    if (isClicked == true) {
      setCount(999);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#212428",
        padding: "50px 0",
      }}
    >
      <Container>
        <Box>
          <Typography variant="h4" color={"#fff"}>
            New Items
          </Typography>
        </Box>
        <Swiper
          data-aos="fade-left"
          data-offset="500"
          data-aos-duration="1000"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            1377: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            },
          }}
        >
          {newItems.map((item, i) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "30px",
                paddingBottom: "45px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "hsla(0,0%,100%,.03)",
                  position: "relative",
                  height: "500px",
                  width: "280px",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  boxShadow: "1px 1px 8px 1px rgba(0,0,0,.1)",
                }}
              >
                <img
                  className="posterImage"
                  src={item.posterImage}
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "20px",
                    zIndex: "4",
                    left: "20px",
                    transition: "all .4s ease",
                  }}
                />
                <img
                  src={item.postImage}
                  style={{
                    width: "90%",
                    position: "absolute",
                    top: "60px",
                    borderRadius: "10px",
                    left: "15px",
                  }}
                />
                <Typography
                  variant="h6"
                  color={"#fff"}
                  sx={{
                    position: "absolute",
                    bottom: "70px",
                  }}
                >
                  {item.postName}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={"600"}
                  fontSize={"14px"}
                  color={"#fff"}
                  position={"absolute"}
                  bottom={"45px"}
                >
                  <span style={{ color: "#707070", paddingRight: "5px" }}>
                    0.08 ETH
                  </span>{" "}
                  1/20
                </Typography>
                <a
                  href="#"
                  style={{
                    color: "rgb(255, 52, 63)",
                    textDecoration: "none",
                    fontSize: "14px",
                    position: "absolute",
                    bottom: "20px",
                  }}
                >
                  Place a Bid
                </a>
                <Typography
                  onClick={toggleLove}
                  position={"absolute"}
                  right={"15px"}
                  bottom={"20px"}
                  sx={{
                    transition: "all .3s ease",
                    cursor: "pointer",
                    color: isClicked ? "rgb(255, 52, 62)" : "#a2a2a2",
                  }}
                >
                  <span>
                    <FavoriteIcon /> {count}
                  </span>
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Items;
