import React, { Fragment } from 'react'
import MetaData from './Layout/MetaData'

export default function Contact() {
	return (
		<Fragment>
			<MetaData title={'Contact Wei'}></MetaData>
			<div className="Contact">
				<div className="Contact--title">
					Welcome to the Contact Section
			</div>
				<div className="Contact--subtitle">
					Feel free to contact me if you need your website implemented via email, phone or LinkedIn.
			</div>

				<div className="Contact--status">
					Currently Status of website:
			</div>

				<div className="Contact--completed">
					Completed:<br />

				</div>

				<div className="Contact--completed__things">
					
					Routing and Authorization<br />
					Login and Logout<br />
					User Information<br />
					User Friendly Navbar/ Footer <br/>
					Products and Filter using advanced api features<br />
					Product page<br />
					Collection page<br />
					Pagination of Collection<br />
					Searching methods<br />
					Sorting methods<br />
					Protected Routes / Rerouting <br/>
					Add to Cart (Backend) <br/>
					Check Order (Backend) <br/>
					User Reviews (Backend) <br/>
					Change User Password (Backend) <br/>
					Payment system (Backend) <br/>
					Admin Vs User Rights (Backend) <br/>
					(ALL BACKEND ROUTES with current features)


				</div>



				<div className="Contact--todo">
					Working on: 
				</div>

				<div className="Contact--todo__things">
					Front end Functionality:<br />
					Add to cart<br />
					Administrative Rights<br />
					User Reviews<br />
					Payment System<br />
					


					
				</div>

				<div className="Contact--future">
					Future Update
				</div>
				<div className="Contact--future__things">
					SAAS Support<br/>
					SEO friendly<br/>
					Emailing system for easy contacting<br/>
				</div>


			</div>
		</Fragment>

	)
}
