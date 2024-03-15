import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Details from './components/Details/Details'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    const isExisting = cart.find(pd => pd.id === item.id)
    if (!isExisting) {
      const newItem = [...cart, item];
      setCart(newItem);
      toast.success("Successfully added");
    } else {
      toast.warning('Already existing Product');
    }
  };

  const handleDelete = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    toast.success("Successfully deleted");
  };

  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-4xl font-bold py-5 text-center'>Show All Product</h1>
      <div className='md:flex md:justify-between md:my-5 gap-5 md:gap-12'>
        <Carts handleCart={handleCart}></Carts>
        <Details cart={cart} handleDelete={handleDelete}></Details>
        <ToastContainer />
      </div>

    </div>
  )
}

export default App
