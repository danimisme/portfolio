"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import ThemeInitializer from "./ThemeInitializer";
import Navbar from "./Navbar";

export default function 
NavbarWithProvider() {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      <Navbar />
    </Provider>
  );
}