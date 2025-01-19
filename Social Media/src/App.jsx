import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/createPost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/posts-list-store";
import "./App.css";
function App() {
  const [selectedtab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          className="sidebar"
          selectedtab={selectedtab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>

          {selectedtab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer className="Footer"></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
