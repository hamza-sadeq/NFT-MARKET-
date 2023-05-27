import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FooterItems } from "./Utils/Constants";

const Footer = () => {
  return (
    <div id="footer">
      <Stack
        sx={{ backgroundColor: "#202020" }}
        borderBottom={"1px solid gray"}
      >
        <Container>
          <Grid
            container
            padding={"60px 0"}
            data-aos="fade-up"
            data-offset="500"
            data-aos-duration="1000"
          >
            {FooterItems.map((item, i) => (
              <Grid item lg={3} md={6} xs={12} key={i}>
                <Typography variant="h6" color={"#fff"}>
                  {item.Title}
                </Typography>
                <Box padding={"20px 0"}>
                  <Typography
                    paddingBottom={"5px"}
                    display={"inline-block"}
                    color={"#777"}
                    fontSize={"18px"}
                    sx={{
                      "&:hover": {
                        color: "rgb(255, 52, 63)",
                      },
                    }}
                  >
                    {item.itemOne}
                  </Typography>
                  <br />
                  <Typography
                    paddingBottom={"5px"}
                    display={"inline-block"}
                    color={"#777"}
                    fontSize={"18px"}
                    sx={{
                      "&:hover": {
                        color: "rgb(255, 52, 63)",
                      },
                    }}
                  >
                    {item.itemTwo}
                  </Typography>
                  <br />
                  <Typography
                    paddingBottom={"5px"}
                    display={"inline-block"}
                    color={"#777"}
                    fontSize={"18px"}
                    sx={{
                      "&:hover": {
                        color: "rgb(255, 52, 63)",
                      },
                    }}
                  >
                    {item.itemThree}
                  </Typography>
                  <br />
                  <Typography
                    paddingBottom={"5px"}
                    display={"inline-block"}
                    color={"#777"}
                    fontSize={"18px"}
                    sx={{
                      "&:hover": {
                        color: "rgb(255, 52, 63)",
                      },
                    }}
                  >
                    {item.itemFour}
                  </Typography>
                  <br />
                  <Typography
                    paddingBottom={"5px"}
                    display={"inline-block"}
                    color={"#777"}
                    fontSize={"18px"}
                    sx={{
                      "&:hover": {
                        color: "rgb(255, 52, 63)",
                      },
                    }}
                  >
                    {item.itemFive}
                  </Typography>
                  <br />
                </Box>
              </Grid>
            ))}
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6" color={"#fff"}>
                Newsletter
              </Typography>
              <Box padding={"20px 0"}>
                <Typography
                  paddingBottom={"5px"}
                  display={"inline-block"}
                  color={"#777"}
                  fontSize={"18px"}
                >
                  Signup for our newsletter to get the latest news in your
                  inbox.
                </Typography>
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="searchInput"
                    style={{
                      backgroundColor: "transparent",
                      width: "250px",
                      border: "none",
                      padding: "6px 15px",
                      borderRadius: "50px",
                      fontSize: "14px",
                      color: "White",
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                  <span
                    style={{
                      color: "#fff",
                      backgroundColor: "rgb(255, 52, 63)",
                      padding: "2px 10px",
                      borderTopRightRadius: "50%",
                      borderBottomRightRadius: "50%",
                      position: "absolute",
                      fontSize: "20px",
                      right: "0px",
                    }}
                  >
                    &#8594;
                  </span>
                </div>
                <Typography
                  paddingBottom={"5px"}
                  display={"inline-block"}
                  padding={"15px 0"}
                  color={"#777"}
                  fontSize={"15px"}
                >
                  Your email is safe with us. We don't spam.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </div>
  );
};

export default Footer;
