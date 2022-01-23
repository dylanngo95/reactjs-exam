import { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import { HomeContext } from '../../Context/HomeContext';
import { ProductItem } from '../../Components/Product/ProductItem';
import './Home.css';

const Home = () => {
    const homeContext = useContext(HomeContext);
    return (
        <>
            <Nav />
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            homeContext.products.map(
                                product => <ProductItem key={product.id} product={product} />
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;