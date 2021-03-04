import React, { Fragment, useState, useEffect } from 'react'
import {Link,NavLink , useHistory} from 'react-router-dom';

import Loader from '../customHooks/Loader'
import { FiAlertCircle } from 'react-icons/fi';
import MetaData from '../Layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../redux/actions/userActions'

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const dispatch = useDispatch();

	const { isAuthenticated, error, loading } = useSelector(state => state.auth);

	// const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {

		if (isAuthenticated) {
			history.push('/shop')
		}

		if (error) {
			
			dispatch(clearErrors());
		}

	}, [dispatch, alert, isAuthenticated, error])

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password))
		console.log(email + password)
	}

	return (
		<Fragment>
			<MetaData title={'Login'}></MetaData>
			{loading ? <Loader /> : (
				<Fragment>
					<div className='login'>
						<div className='login--container'>
							<h1 className='login--container__header'> Sign In</h1>
							<form className='login--container__form' onSubmit={submitHandler}>
								<label className='login--container__form--label'>
									Email Address <FiAlertCircle className='login--container__form--label__icon'></FiAlertCircle>
								</label>
								<input className='login--container__form--input' type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
								<label className='login--container__form--label'>
									Password
								</label>
								<input className='login--container__form--input' type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>

								<input className='login--container__form--button' type="submit" value="Sign In" />
							</form>
							<div className='login--container__forgot'>
								
								<Link to='/password/forgot' className='login--container__forgot--link' href="">Forgot Password?</Link>
							</div>

							<div className='login--container__or'>
								OR
							</div>
							<div className='login--container__create'>
								<Link to='/register' className='login--container__create--link' >Create Account</Link>
							</div>
						</div>
					</div>

				</Fragment>
			)}
		</Fragment>
	)
}

export default Login