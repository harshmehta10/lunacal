import React from "react";
import Layout from "./components/Layout";
import Tabs from "./components/Tabs";
import GalleryWidget from "./components/GalleryWidget";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Layout>
        <Tabs />
        <GalleryWidget />
      </Layout>
    </div>
  );
}

export default App;
