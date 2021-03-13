import React, { Fragment, useState, useEffect } from 'react'

import { useDispatch, useSelector }from 'react-redux'
import { updatePassword, loadUser, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../redux/types'
import MetaData from '../Layout/MetaData'

export default function UpdateProfile({history}) {
	const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
	const dispatch = useDispatch();
	

	const { user } = useSelector(state => state.auth);
	const { error, isUpdated, loading } = useSelector(state => state.user)

	
	useEffect(() => {

       
        if (error) {
           
            dispatch(clearErrors());
        }

      

    }, [dispatch, alert, error, history])


	const submitHandler=(e)=>{
		    e.preventDefault();
            if( newPassword == confirmPassword){
                dispatch(updatePassword(oldPassword, newPassword))
			
                dispatch(loadUser());
    
                
                history.push('/me')
                
                dispatch({
                    type: UPDATE_PASSWORD_RESET
                })
            }
            else{
                alert('Password does not match')
            }
		  
		
	}
	
	return (
		<Fragment>
			<MetaData title="Update Profile"></MetaData>
			<Fragment>
			<div className='login'>
						<div className='login--container'>
							<h1 className='login--container__header'>Update your password</h1>
							
							<form className='login--container__form' onSubmit={submitHandler}>
								
								<label className='login--container__form--label'>
									Old Password
								</label>
								<input className='login--container__form--input' type="password" name="oldpassword" value={oldPassword} onChange={(e) =>setOldPassword(e.target.value)}/>
								<label className='login--container__form--label'>
									New Password
								</label>
								<input className='login--container__form--input' type="password" name="newpassword" value={newPassword} onChange={(e) =>setNewPassword(e.target.value)}/>
								<label className='login--container__form--label'>
									Confirm New Password
								</label>
                                <input className='login--container__form--input' type="password" name="confirmnewpassword" value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
								<input className='login--container__form--button' type="submit" value="Update Account Info" />
							</form>
							
							
						</div>
					</div>
			</Fragment>
			
		
		</Fragment>
		
	)
}
