import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Movies from '../../components/movies/Movies'
import { Navbar } from '../../components/navbar/Navbar'
import New from '../../components/new/New'
import Popular from '../../components/popular/Popular'
import Series from '../../components/series/Series'
import './home.scss'


const home = () => {
    return (
        <div className="home">
            <Navbar/>            
            <Featured />
            <List/>
            <Series/>
            <Movies/>
            <New/>
            <Popular/>       
        </div>
    )
}

export default home
