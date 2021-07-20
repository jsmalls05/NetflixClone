import Featured from '../../components/featured/Featured'
import {Navbar} from '../../components/navbar/Navbar'
import Rows from '../../components/rows/Rows'
import api from '../../api/api'
import './home.scss'


const home = () => {
    return (
        <div className="home">
            <Navbar/>            
            <Featured/>
            <Rows            
            title="Netflix Originals"
            fetchUrl ={api.fetchNetflixOriginals}
            isLargeRow={true}
            />
            <Rows title="Trending Now" fetchUrl={api.fetchTrending}/>
            <Rows title="Top Rated" fetchUrl={api.fetchTopRated}/>
            <Rows title="Action Movies" fetchUrl={api.fetchActionMovies}/>
            <Rows title="Comedy Movies" fetchUrl={api.fetchComedyMovies}/>
            <Rows title="Horror Movies" fetchUrl={api.fetchHorrorMovies}/>
            <Rows title="Romance Movies" fetchUrl={api.fetchRomanceMovies}/>
            <Rows title="Documentaries" fetchUrl={api.fetchDocumentaries}/>
            <Rows title="Mystery" fetchUrl={api.fetchMystery}/>
            <Rows title="SciFi" fetchUrl={api.fetchSciFi}/>
            <Rows title="Western" fetchUrl={api.fetchWestern}/>
            <Rows title="Animation" fetchUrl={api.fetchAnimation}/>
            <Rows title="TV" fetchUrl={api.fetchTV}/>


            
        </div>
    );
};

export default home;