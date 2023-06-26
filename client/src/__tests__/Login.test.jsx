import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { persistReducer } from "redux-persist";
import { themeSettings } from "theme";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import authReducer from "../state";
import storage from "redux-persist/lib/storage";
import Form from "../scenes/loginPage/Form";

test("Renders Login Form on Light Mode", () => {
  const theme = createTheme(themeSettings("light"));
  const persistConfig = { key: "root", storage, version: 1 };
  const store = configureStore({
    reducer: persistReducer(persistConfig, authReducer),
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );

  const emailField = screen.getByLabelText("Email");
  const passwordField = screen.getByLabelText("Password");
  const registerLink = screen.getByText("Don't have an account? Register here");

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});
