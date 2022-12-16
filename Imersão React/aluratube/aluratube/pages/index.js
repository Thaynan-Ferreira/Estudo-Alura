import Header from "./components/Header";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import styled from "styled-components";
import config from "../config.json"

function Home() {
  config.playlists

  return (
    <div style={{ backgroundColor: "red" }} >
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
    </div>
    

  )
}

export default Home
