import './Page404.css';

const Page404 = () => {
    return (
        <div className='container md flex flex-col'>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p className="font-bold">404 Opps</p>
                <p>Sorry, but the page you were trying to view does not exist.</p>
            </div>
        </div>
    )
}

export default Page404;