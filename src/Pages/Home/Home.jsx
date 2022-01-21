import { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { HomeContext } from '../../Context/HomeContext';
import Customer from '../../Components/Customer/Customer';
import './Home.css';

const Home = () => {
    const homeContext = useContext(HomeContext);
    return (
        <>
            <Header />
            <div className='container p-5'>
                <div className="grid gap-4 grid-cols-2">
                    {
                        homeContext.customers.map(item =>
                            <Customer
                                post={item.post}
                                image={item.image}
                                name={item.name}
                                companyName={item.companyName}
                                key={item.id}
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