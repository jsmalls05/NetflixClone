import { ArrowBackOutlined } from "@material-ui/icons"
import ReactPlayer from "react-player"
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <ReactPlayer className="video"
            url="https://player.vimeo.com/video/397814171" 
            playing={true} 
            loop={true} />
        </div>
    )
}


