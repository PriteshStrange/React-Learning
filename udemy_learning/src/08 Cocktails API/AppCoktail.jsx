import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context";
import IndexCoktails from "./IndexCoktails";

const AppCoktail = () => {
  return (
    <>
        <BrowserRouter>
        <AppProvider>
          <IndexCoktails />
        </AppProvider>
        </BrowserRouter>
    </>
  );
};

export default AppCoktail;
