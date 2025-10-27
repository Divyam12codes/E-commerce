import header from './assets/header.jpg';
import puma4 from './assets/puma4.jpg';
import adi2 from './assets/adi2.jpg';
import nike1 from './assets/nike1.jpg';
import Card from './Card';
import { Link } from 'react-router-dom';
function Home(){
    return(
    <>
      <div className='relative'>
        <img src={header}></img>
        <div className='absolute inset-0 flex gap-5 flex-col justify-center items-center'>
          <h1 className='text-5xl text-white'>New Collection</h1>
          <Link to="/shop"><button className='border border-white m-3 p-3 text-white'>Shop Now</button></Link>
        </div>
      </div>
      <span className='flex flex-col border m-3 p-5 justify-center items-center'>
        <h1 className='text-4xl font-serif'>OUR BEST SELLERS</h1>
        <h2 className='text-xl m-3'>Don't Miss Out</h2>
      </span>
      <div className='flex flex-row justify-between items-center'>
        <Card src={puma4}/>
        <Card src={adi2}/>
        <Card src={nike1}/>
      </div>
      <div className='flex justify-center items-center'>
        <Link to="/shop"><button className='border w-60 h-50 m-5 p-3 font-semibold text-white bg-slate-500'>Shop Best Sellers</button></Link>
      </div>
    </>
    );
}

export default Home;