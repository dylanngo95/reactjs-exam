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
                <div className="grid gap-4 grid-cols-2">
                    <div><p className="indent-8">
                        So I started to walk into the water. I wont lie to you boys, I was
                        terrified. But I pressed on, and as I made my way past the breakers
                        a strange calm came over me. I dont know if it was divine intervention
                        or the kinship of all living things but I tell you Jerry at that moment,
                        I was a marine biologist.
                    </p></div>
                    <div><p className="indent-8">
                        The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
                    </p></div>
                    <div><p className="indent-8">
                        The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
                    </p></div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Home;