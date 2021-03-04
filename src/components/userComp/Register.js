import React, { Fragment, useState, useEffect } from 'react'
import {Link,NavLink , useHistory} from 'react-router-dom';

import Loader from '../customHooks/Loader'
import { FiAlertCircle } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../redux/actions/userActions'
import MetaData from '../Layout/MetaData'


export default function Register() {

	const history = useHistory();
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [avatarPreview, setAvatarPreview] = useState('/images/blank.jpg')


	const dispatch = useDispatch({history});

	const { isAuthenticated, error, loading } = useSelector(state => state.auth);

	// const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {

		if (isAuthenticated) {
			history.push('/shop')
		}

		if (error) {
			
			dispatch(clearErrors());
		}

	}, [dispatch, alert, isAuthenticated, error, history])

	const submitHandler = (e) => {
		e.preventDefault();
		
		dispatch(register(name,email,password))
		
	}


	

	return (
		<Fragment>
			<MetaData title="Register"></MetaData>
			{loading ? <Loader /> : (
				<Fragment>
					<div className='login'>
						<div className='login--container'>
							<h1 className='login--container__header'> Sign Up</h1>
							
							<form className='login--container__form' onSubmit={submitHandler}>
								
								<label className='login--container__form--label'>
									Name
								</label>
								<input className='login--container__form--input' type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)}/>
								<label className='login--container__form--label'>
									Email Address
								</label>
								<input className='login--container__form--input' type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
								<label className='login--container__form--label'>
									Password
								</label>
								<input className='login--container__form--input' type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>

								<input className='login--container__form--button' type="submit" value="CREATE ACCOUNT" />
							</form>
							
							
						</div>
					</div>

				</Fragment>
			)}
		</Fragment>
	)
}
