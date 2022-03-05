import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      400: "rgba(255, 186, 8, 0.5)",
      500: "#ffba08",
      600: "#e0a100",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
