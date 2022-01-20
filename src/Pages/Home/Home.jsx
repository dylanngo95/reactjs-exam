import { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { HomeContext } from '../../Context/HomeContext';
import './Home.css';

const Home = () => {
    const homeContext = useContext(HomeContext);
    return (
        <>
            <Header />
            <div className='container'>
                <p>Home Component {homeContext.count}</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => { homeContext.dispatch('increment') }} >Increase</button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => { homeContext.dispatch('decrement') }} >Decrease</button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => { homeContext.dispatch('reset') }} >Reset</button>
            </div>
            <Footer />
        </>

    );
}

export default Home;