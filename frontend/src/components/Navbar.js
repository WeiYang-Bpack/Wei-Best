import React, {useState,useEffect} from 'react'
import {Link,NavLink , useHistory} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {GoHome, GoThreeBars,GoX} from 'react-icons/go';
import {AiFillShop,AiOutlineSearch} from 'react-icons/ai'
import Search from '../components/Search';
import {DropDown} from 'react-bootstrap'
import {IoCartOutline} from 'react-icons/io5'
import {useDispatch, useSelector} from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown'
import {GrLogout} from 'react-icons/gr'
import {logout} from '../redux/actions/userActions';

export default function Navbar() {

	const dispatch = useDispatch();

	let {user, loading} = useSelector(state => state.auth)
	const history = useHistory();
	let [click, setClick] = useState(true);
	const { cartItems } = useSelector(state => state.cart)
	// const{width} = useWindowSize();
	// let isMobile = true;
	// if (width >= 992){
	// 	isMobile = false;
	// }
	
	// }else{
	// 	isMobile = true;
	// }
	

	const goHome = () =>{
		history.push('/');
	}

	let handleClick = () => {
		setClick(!click)
	}
	
	let setClickOff = ()=>{
		setClick(true)
	}


	const logoutHandler = ()=>{
		dispatch(logout());
		
		// alert('success')
	}

	useEffect(()=>{
		document.addEventListener("mousedown",()=>{
			setClick(true)
		})
	})
	
	
	return (
		<div className="Navbar">
			<div onClick={()=>{goHome()}} className="Navbar--left">
				<div className="Navbar--left__wei">
						WeiYang
					</div>
					<div className="Navbar--left__shop">
					<AiFillShop className="Navbar--left__shop--icon"></AiFillShop>Shop
					</div>
			
			</div>
			
			
			<Route render={({history})=> <Search history={history}/>}/>
		

		
			
			<div className={click ? "Navbar--right" : "Navbar--right__active"}>
					<NavLink onClick={setClickOff} activeStyle={{color: " #1dace3"}} className= "Navbar__links" exact to="/">Home</NavLink>
					<NavLink onClick={setClickOff} activeStyle={{color: " #1dace3"}} className= "Navbar__links" exact to="/shop">Shop</NavLink>
				
					<NavLink onClick={setClickOff} activeStyle={{color: " #1dace3"}} className= "Navbar--cart" exact to="/cart"><IoCartOutline></IoCartOutline><div className="Navbar--cart__number">{cartItems.length}</div></NavLink>
					{user ? (

						
						<div className="Navbar__links--url">
							
							<div>
								<Link className = "Navbar__links--url__name" to='/me'>
								{user && user.name}
								</Link>
							
							</div>
							<div className="Navbar__links--url__link">
							<Link to="/" onClick={logoutHandler}><GrLogout></GrLogout></Link>
							</div>
						
							
							
							
							
						</div>
						
						

					):(
						
						<NavLink onClick={setClickOff} className= "Navbar__links--login" to="/login">Login</NavLink>
					)}
					

			</div>


			<div className="Navbar--holder">
			<NavLink onClick={setClickOff} activeStyle={{color: " #1dace3"}} className= "Navbar--cart2"  exact to="/cart"><IoCartOutline></IoCartOutline><div className="Navbar--cart__number">{cartItems.length}</div></NavLink>
			{ click ? <GoThreeBars onClick={() => handleClick()} className="Navbar--bar"></GoThreeBars> : <GoX onClick={() => handleClick()} className="Navbar--bar"></GoX>}
			{/* <GoThreeBars onClick={() => handleClick()} className="Navbar--bar"></GoThreeBars> */}
			</div>
			
		
	
			
			

			
			
		</div>
		
	)
}
