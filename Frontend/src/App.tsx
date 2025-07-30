import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"
import AppRoutes from "./Routes/AppRoutes";

const theme = createTheme({
  focusRing: "never",
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Merriweather, serif",
  },
  colors: {
    primary: [
      "#1f1fca",
      "#cf8ef",
      "#9ff0e1",
      "#671ecf",
      "#32b9a9",
      "#1fad9f",
      "#1688b2",
      "#166669",
      "#165955",
      "#747a47",
      "#0722cb",
    ],
    neutral: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#666d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#000000",
    ],
  },
  primaryColor: "primary",
  primaryShade: 4,
  defaultGradient:{
    from: "primary.4",
    to: "primary.8",
    deg: 132
  }
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AppRoutes />
    </MantineProvider>
  );
};

export default App;
