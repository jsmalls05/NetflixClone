import Featured from '../components/featured/Featured'
import { Navbar } from '../components/navbar/Navbar'
import './home.scss'


const home = () => {
    return (
        <div className="home">
            <Navbar/>            
            <Featured />
        </div>
    )
}

export default home
