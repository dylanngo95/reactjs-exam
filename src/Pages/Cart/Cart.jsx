import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useContext, useEffect, useState } from 'react';
import { CustomerContext } from '../../Context/CustomerContext';
import { HomeContext } from "../../Context/HomeContext";
import { useNavigate } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
    let { products } = useContext(HomeContext);
    let { _customer, dispatchCustomer } = useContext(CustomerContext);
    const product = products.find(item => item.id == cartItem.id);

    const removeFromCart = () => (productId) => () => {
        dispatchCustomer({
            type: 'REMOVE_PRODUCT',
            qty: 1,
            id: productId,
            name: null,
            price: null
        });
    }

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500"
                    src={product.imageSrc}
                    alt={product.imageAlt} />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{cartItem.name}</h3>
                            <p className="text-sm text-coolGray-600">Classic</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold">x{cartItem.qty}</p>
                            <p className="text-lg font-semibold">{cartItem.price * cartItem.qty}$</p>
                            <p className="text-sm line-through text-coolGray-400">{cartItem.price * cartItem.qty * 2}$</p>
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <button
                            onClick={removeFromCart()(cartItem.id)}
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fillCurrent">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button>
                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fillCurrent">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            <span>Add to favorites</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

const Cart = () => {

    let { customer, _dispatchCustomer } = useContext(CustomerContext);
    let [totalAmount, setTotalAmount] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        let totalAmount = 0;
        customer.forEach(item => {
            totalAmount += item.price * item.qty;
        });
        setTotalAmount(totalAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, customer);

    function onClickBack() {
        navigate('/');
    }
 
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-coolGray-50 text-coolGray-800">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-coolGray-300">
                        {
                            customer.map(cartItem => cartItem.qty > 0 && <CartItem key={cartItem.id} cartItem={cartItem} />)
                        }
                    </ul>
                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold"> {totalAmount}$</span>
                        </p>
                        <p className="text-sm text-coolGray-600">Not including taxes and shipping costs</p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button onClick={onClickBack} type="button" className="px-6 py-2 border rounded-md border-black-600 text-coolGray-50">Back
                            <span className="sr-only sm:not-sr-only"> to shop</span>
                        </button>
                        <button type="button" className="px-6 py-2 border rounded-md text-white bg-red-500 text-coolGray-50">
                            <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;