import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';

const Carts = ({ handleCart }) => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);
    return (
        <div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-4'>
                {
                    carts.map((cart, index) => <Cart key={index} handleCart={handleCart} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    handleCart: PropTypes.func.isRequired
};
export default Carts;