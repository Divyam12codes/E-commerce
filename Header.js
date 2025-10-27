import cart from './assets/cart.png';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link , useNavigate} from "react-router-dom";
import { SearchContext } from './SearchContext';
function Header({user,setUser}) {
  const navigate = useNavigate();
  const { cartOpen, toggleCart, cartItems } = useContext(CartContext);
  const {searchTerm,setSearchTerm,searchInput,setSearchInput} = useContext(SearchContext);
  const navigate2= useNavigate();
  const handleLogout= () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  }
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log(e.value);
  };
  const handlekeyDown = (e) => {
    if(e.key === "Enter"){
      setSearchTerm(searchInput);
      navigate2("/shop");
    }
  };

  return (
        <>
        <div className='flex m-0 p-0 border bg-white-400 justify-between items-center'>
        <div>
        <input type="text" placeholder="search products..." value={searchInput} onChange={handleSearch} onKeyDown={handlekeyDown} className='m-2 ml-4 p-2 rounded-xl border-2 border-black'/>
        <button onClick={() => {
          setSearchTerm("");
          setSearchInput("");
          navigate("/shop");
        }}
        className="bg-gray-200 text-black px-2 py-1 rounded"
        >
        Clear
        </button>
        </div>
        <div className='flex justify-end items-center cursor-pointer'>
          {user ? (
          <button onClick={handleLogout} className='mr-4'>
            Logout
          </button>
        ) : (
          <Link to="/login" className='mr-4'>
            Login
          </Link>
        )}
        </div>
      </div>
      <div className='border bg-slate-500 border-black flex justify-between items-center'>
        <nav>
          <ul className='flex gap-5 m-5 text-white'>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/sale">Sale</Link></li>
            <li><Link to="/customer">Customer Care</Link></li>
            <li><Link to="/store">Stores</Link></li>
          </ul>
        </nav>
        <Link to="/"><h1 className='text-3xl -ml-20 text-white pr-11'>URBAN HOOD</h1></Link>
        <div className='flex justify-center items-center gap-3 relative'>
          <img src={cart} onClick={toggleCart} className='h-11 w-11 mr-3 cursor-pointer'></img>
          {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
          )}
        </div>
      </div>    
        </>
    );
}

export default Header;