import config from "../../../config.json";
import styled from "styled-components";

const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists)
    return(
        <div>
            {
            playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )

    
}

export default Timeline