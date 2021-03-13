import React, { Fragment, useState, useEffect } from 'react'

import { useDispatch, useSelector }from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../redux/types'
import MetaData from '../Layout/MetaData'

export default function UpdateProfile({history}) {
	const [name, setName] = useState('')
    const [email, setEmail] = useState('')

	const dispatch = useDispatch();
	

	const { user } = useSelector(state => state.auth);
	const { error, isUpdated, loading } = useSelector(state => state.user)

	
	useEffect(() => {

        if (user) {
            setName(user.name);
            setEmail(user.email);
            
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

      

    }, [dispatch, alert, error, history])


	const submitHandler=(e)=>{
		e.preventDefault();
		
		dispatch(updateProfile(name, email))
			
			dispatch(loadUser());

			
            history.push('/me')
			
            dispatch({
                type: UPDATE_PROFILE_RESET
            })
		
	}
	
	return (
		<Fragment>
			<MetaData title="Update Profile"></MetaData>
			<Fragment>
			<div className='login'>
						<div className='login--container'>
							<h1 className='login--container__header'>Change Your Info</h1>
							
							<form className='login--container__form' onSubmit={submitHandler}>
								
								<label className='login--container__form--label'>
									Name
								</label>
								<input className='login--container__form--input' type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)}/>
								<label className='login--container__form--label'>
									Email Address
								</label>
								<input className='login--container__form--input' type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
								

								<input className='login--container__form--button' type="submit" value="Update Account Info" />
							</form>
							
							
						</div>
					</div>
			</Fragment>
			
		
		</Fragment>
		
	)
}
