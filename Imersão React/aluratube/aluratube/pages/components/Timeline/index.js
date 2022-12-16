import config from "../../../config.json";
import styled from "styled-components";

const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists)
    return(
        <div>
            {
            playlistNames.map((playlistNames) => {
                return playlistNames;
            })}
        </div>
    )

    
}

export default Timeline