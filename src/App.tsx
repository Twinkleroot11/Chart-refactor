import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import theme from "./theme";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
