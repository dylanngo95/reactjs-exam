import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { HomeContext } from '../../Context/HomeContext';
import { CustomerContext } from '../../Context/CustomerContext';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';


const ProductDetail = () => {
    let { productId } = useParams();
    let { products } = useContext(HomeContext);
    const product = products.find(item => item.id == productId);

    let { _customer, dispatchCustomer } = useContext(CustomerContext);

    const addToCart = () => (productId) => () => {
        dispatchCustomer({
            type: 'ADD_PRODUCT',
            qty: 1,
            id: productId,
            name: name
        });
    }

    return (
        <div className='w-full'>
            <Nav />
            <div className="flex text-base text-left w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center px-4 pt-14 pb-8 overflow-hidden  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden sm:col-span-4 lg:col-span-5">
                            <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                            <section aria-labelledby="information-heading" className="mt-2">
                                <h3 id="information-heading" className="sr-only">
                                    Product information
                                </h3>
                                <p className='text-1xl text-gray-900'>{product.imageAlt}</p>
                                <p className="text-2xl text-gray-900 pt-2">${product.price}</p>

                            </section>

                            <section aria-labelledby="options-heading" className="mt-5">
                                <h3 id="options-heading" className="sr-only">
                                    Product options
                                </h3>
                                <div className="flex space-x-4">
                                    <button onClick={addToCart()(productId)} className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-slate-200 text-slate-900 sm:w-auto" type="button">
                                        Add
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail;