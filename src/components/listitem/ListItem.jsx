import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from '@material-ui/icons';
import { useState } from 'react';
import ReactPlayer from "react-player"
import "./listitem.scss"

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/video/397814171";
    return (
        <div className="listItem" 
        style={{left: isHovered && index * 225 -50 + index * 2.5}} 
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        >
            <img src="https://i.ytimg.com/vi/IwX0txCFIhE/maxresdefault.jpg" alt="" />
            {isHovered && (
            <>                
            <ReactPlayer className="video"
            url={trailer}
            playing={true} 
            loop={true} />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 25 min</span>
                    <span className="limit">+15</span>
                    <span>2010</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam illum dignissimos expedita. 
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}
        </div>
    );
}

