import { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { HomeContext } from '../../Context/HomeContext';
import Product from '../../Components/Product/Product';
import './Home.css';

const Home = () => {
    const homeContext = useContext(HomeContext);
    return (
        <>
            <Header />
            <div className='container p-5'>
                <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
                    {
                        homeContext.customers.map(item =>
                            <Product
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                inStock={item.inStock}
                            />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;