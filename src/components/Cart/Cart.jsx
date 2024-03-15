import PropTypes from 'prop-types';

const Cart = ({ cart, handleCart }) => {
    const { title, description, image, category, price } = cart;
    return (
        <div>
            <div className="card card-compact w-full h-[400px] bg-white shadow-xl p-3 text-black">
                <figure><img  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title.slice(0, 15)}</h2>
                    <p>{description.slice(0, 100)}</p>
                    <p className='text-xl'>{category}</p>
                    <p className='font-bold text-1xl'>Price : ${price}</p>
                    <button className="btn btn-primary" onClick={() => handleCart(cart)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
};

export default Cart;