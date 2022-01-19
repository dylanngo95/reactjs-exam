import React, { useContext } from 'react';
import { CounterContext } from '../../context/Reducer';

const Home = () => {
    const ctContext = useContext(CounterContext);
    return (
        <div>
            <p>Home Component {ctContext.count}</p>
            <button onClick={() => {
                ctContext.dispatch('increment')
            }} >Increase</button>
            <button onClick={() => { ctContext.dispatch('decrement') }} >Decrease</button>
            <button onClick={() => { ctContext.dispatch('reset') }} >Reset</button>
        </div>
    );
}

export default Home;