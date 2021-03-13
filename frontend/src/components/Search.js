import React, {useState,useEffect} from 'react'
import {AiFillShop,AiOutlineSearch} from 'react-icons/ai'

export default function Search({history}) {
	let [keyword, setKeyword] = useState('');
	const searchHandler = (e)=>{
		e.preventDefault()

		if(keyword.trim()){
			history.push(`/search/${keyword}`)
			
		}else{
			history.push('/shop');
		}
	}

	return (
		<div className="Navbar--center">
		<form onSubmit={searchHandler}>
			<input className="Navbar--center__inputbox" type="text" placeholder='Search' onChange={(e)=> setKeyword(e.target.value)}/>
			<button className="Navbar--center__button" type="submit"  value="bar"><AiOutlineSearch></AiOutlineSearch></button>
		</form>
	</div>
	)
}
