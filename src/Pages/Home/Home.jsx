import React, { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { HomeContext } from '../../Context/HomeContext';

const Home = () => {
    const homeContext = useContext(HomeContext);
    return (
        <>
            <Header />
            <div>
                <p>Home Component {homeContext.count}</p>
                <button onClick={() => { homeContext.dispatch('increment') }} >Increase</button>
                <button onClick={() => { homeContext.dispatch('decrement') }} >Decrease</button>
                <button onClick={() => { homeContext.dispatch('reset') }} >Reset</button>
            </div>
            <Footer />
        </>

    );
}

export default Home;