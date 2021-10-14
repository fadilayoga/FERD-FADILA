import React from "react";
import { NativeBaseProvider } from "native-base";
import Header from './components/Header'
import Posts from './components/Posts'

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Posts />
    </NativeBaseProvider>
  );
}
