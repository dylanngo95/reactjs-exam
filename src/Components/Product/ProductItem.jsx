import { useContext } from 'react';
import { CustomerContext } from '../../Context/CustomerContext';

export function ProductItem({ product }) {
    let { _customer, dispatchCustomer } = useContext(CustomerContext);

    const addToCart = () => (productId) => () => {
        dispatchCustomer({
            type: 'ADD_PRODUCT',
            qty: 1,
            id: productId,
            name: name
        });
    }

    const removeFromCart = () => (productId) => () => {
        dispatchCustomer({
            type: 'REMOVE_PRODUCT',
            qty: 1,
            id: productId,
            name: name
        });
    }

    return (
        <div>
            <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </a>
            <div className="flex space-x-2 mt-2 mb-4 text-sm font-medium">
                <div className="flex space-x-4">
                    <button onClick={addToCart()(product.id)} className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-slate-200 text-slate-900 sm:w-auto" type="button">
                        Add
                    </button>
                    <button onClick={removeFromCart()(product.id)} className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-slate-200 text-slate-900 sm:w-auto" type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>

    );
}