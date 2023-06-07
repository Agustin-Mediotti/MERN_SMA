import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");

  return (
    <Box>
      <Box width={"100%"} backgroundColor={theme.palette.background.alt}>
        <Typography
          fontWeight={"bold"}
          fontSize={"clamp(1rem, 2rem, 2.25rem)"}
          color={"primary"}
        >
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          textAlign={"center"}
          fontWeight={"500"}
          variant={"h4"}
          sx={{ mb: "1.5rem" }}
        >
          Sociopedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
