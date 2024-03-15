import PropTypes from 'prop-types';

const Details = ({ cart, handleDelete }) => {
    const prices = cart.reduce((p, c) => p + c.price, 0)
    return (
        <div className='w-full'>
            <div className='bg-white rounded-xl p-4'>
                <h4 className='text-center p-3 text-3xl text-black font-extrabold'>Cart Details: {cart.length}</h4>
                <hr className='border-2' />
                <div className='space-y-4 text-white p-5'>
                    {cart.map((item, index) => (
                        <div key={index} className='flex justify-between items-center rounded-lg p-4 bg-slate-500'>
                            <h5>{item.title.slice(0, 10)}</h5>
                            <p>Price: {item.price}</p>
                            <button onClick={() => handleDelete(item.id)} className='btn btn-primary text-white'>remove</button>
                        </div>
                    ))}
                </div>
                <hr className='border-2' />
                <p className='text-2xl font-bold text-black text-center'>Total Price : {Math.round(prices)}</p>
            </div>
        </div>
    );
};

Details.propTypes = {
    cart: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired

};

export default Details;