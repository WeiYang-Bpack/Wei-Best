import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Loader from '../customHooks/Loader';
import MetaData from '../Layout/MetaData';



export default function Profile() {

	const { user, loading } = useSelector(state => state.auth);

	return (

		<Fragment>
			<MetaData title={'My Profile'}></MetaData>
			{loading ? <Loader /> : (

				<Fragment>

					<div className='Profile'>
						<div className='Profile--title'>
							<h1>My Profile</h1>
						</div>
						<div className='Profile--details'>
							<div className='Profile--details__labels'> Full Name</div>
							<div className='Profile--details__data'> {user.name}</div>
							<div className='Profile--details__labels'> Email </div>
							<div className='Profile--details__data'> {user.email}</div>
							<div className='Profile--details__labels'> Joined on </div>
							<div className='Profile--details__data'> {String(user.createdAt).substring(0, 10)}</div>
						</div>
						
						
						<div className='Profile--links'>
							
								<Link className='Profile--links__links' to='/me/update' >Edit Profile</Link>
							
							
								<Link className='Profile--links__links' to='/password/update' >Change Password</Link>
						
							
								
							
						</div>

					</div>

				</Fragment>
			)}
		</Fragment>

	)
}
