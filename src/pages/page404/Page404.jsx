import React, { useContext } from 'react';
import { CounterContext } from '../../context/Reducer';

const Page404 = () => {

    const ctContext = useContext(CounterContext);

    return(
        <div>
            Opps 404 - {ctContext.count}
        </div>
    );
}

export default Page404;