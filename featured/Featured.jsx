import "./featured.scss"
import PlayArrow from "@material-ui/icons/PlayArrow";
import InfoOutlined from '@material-ui/icons/InfoOutlined';

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comdey">Comdey</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://uhdwallpapers.org/uploads/cache/4141590333/ready-player-one_600x338-mm-90.jpg" alt="" />
            <div className="info">
                <img src="https://numskull.com/wp-content/uploads/ready-player-one-5aaba8713f748-2.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet architecto dolorem aliquid, distinctio placeat veritatis ipsa in explicabo quos fugit sit rerum? Rem maiores, laudantium explicabo quisquam delectus rerum tempora dignissimos! Ipsum culpa molestias, quos temporibus necessitatibus exercitationem, quasi laudantium in reiciendis eum quo expedita possimus porro assumenda deserunt?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


