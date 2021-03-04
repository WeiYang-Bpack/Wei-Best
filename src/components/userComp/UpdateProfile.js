import React, {Fragment, useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../redux/actions/userActions'
import MetaData from '../Layout/MetaData'

export default function UpdateProfile() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const dispatch = useDispatch();
	

	const {user} = useSelector(state => state.auth);
	const {error, isUpdated,loading} = useSelector(state=>state.user)

	useEffect(()=>{
		if(user){
			setName(user.name);
			setEmail(user.email);

		}
		if (error) {
			
			dispatch(clearErrors());
		}
	})

	return (
		<Fragment>
			<MetaData title="Update Profile"></MetaData>
			<div>
			CHANGE PROFILE
			</div>
		
		</Fragment>
		
	)
}
