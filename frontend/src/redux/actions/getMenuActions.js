import API from '../../util/API';
import {GET_MENU}  from '../types';
import axios from 'axios';

const options = {headers: {"Content-Type" : "application/json"}};

export const getMenuActions =() => async(dispatch) =>{
	const url = '/menu';
	try{
		
		//CHANGE LATER back gro API.getURL
		//const res = await API.get(url);
		const res = await axios.get('http://localhost:4000/api/v1/');
		//console.log(menuResult);
		//console.log(res.data);
		// for (let i = 0; i < res.data.length; i++){
		// 	dispatch({type: GET_MENU, payload: res.data[i]});
		
		// }
		
		dispatch({type: GET_MENU, payload: res.data});
	
	}catch(err){
		console.log("ERROR");
	}
	// return {type: "Get_Menu", payload: item};
}