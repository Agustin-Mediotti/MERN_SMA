import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");

  return (
    <Box>
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontSize="32px"
          color="primary"
          fontFamily={"Alfa Slab One"}
          letterSpacing={"0.09em"}
        >
          Tomblr
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={"1rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          textAlign={"center"}
          fontWeight={"bold"}
          variant={"h4"}
          sx={{ mb: "1.5rem" }}
        >
          Explore trending topics on Tumblr.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
