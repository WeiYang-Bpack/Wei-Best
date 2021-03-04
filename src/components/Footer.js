import React from 'react'
import {IoIosArrowUp} from 'react-icons/io';
import {MdLocalPhone} from 'react-icons/md';
import {GrLinkedinOption} from 'react-icons/gr';
import {SiGithub} from 'react-icons/si';
import {TiContacts} from 'react-icons/ti';
import {IoIosArrowDown} from 'react-icons/io';
import {Link} from 'react-router-dom';
export default function Footer() {
	return (
		<div className="footer">
			<div className="footer--Container">
				<div className='footer--Container__section'>
					<div className='footer--Container__section--title'>
						CONTACT
					</div>
					<div className='footer--Container__section--des0'>
						Somewhere in West Covina, CA
					</div>
					<a className='footer--Container__section--des0--special--anchor'  href="mailto:weiyang2270@gmail.com">
					<div className='footer--Container__section--des0--special'>
						Weiyang2270@gmail.com
					</div>
					</a>

					<div className='footer--Container__section--des0'>
						(626) 123 - 4567
					</div>

					<div className="footer--Container__section--des0">
					<a className="footer--Icon" href="https://www.linkedin.com/in/weifeng-yang-25b866202/">
					<GrLinkedinOption className="homeTop--socialMedia__icon"></GrLinkedinOption>
					</a>

					<a className="footer--Icon" href="https://github.com/WeiYang-Bpack">
					<SiGithub className="homeTop--socialMedia__icon"></SiGithub>
					</a>
					

					<a className="footer--Icon" href="mailto:weiyang2270@gmail.com">
					<TiContacts className="homeTop--socialMedia__icon"></TiContacts>
					</a>
					
				</div>

				</div>


				<div className='footer--Container__section'>
					<div className='footer--Container__section--title'>
						NAVIGATION
					</div>

					<Link className = "footer--Container__section--links" exact to = '/'><div>Home</div></Link>
					<Link className = "footer--Container__section--links" exact to = '/shop'><div>Shop</div></Link>
					<Link className = "footer--Container__section--links" exact to = '/contact'><div>Contact</div></Link>
					<Link className = "footer--Container__section--links" exact to = '/login'><div>Login</div></Link>
					
				</div>
				<div className='footer--Container__section'>
					<div className='footer--Container__section--title'>
						RECENT NEWS
					</div>
					<div className='footer--Container__section--desNews'>
						December 19, 2020
					</div>
					<div className='footer--Container__section--desNews'>
						OPEN NOW
					</div>
					<div className='footer--Container__section--desNews'>
						November 30, 2020
					</div>
					
				</div>
				<div className='footer--Container__section'>
					<div className='footer--Container__section--title'>
						Careeer
					</div>
					<div className='footer--Container__section--desNews--hiring'>
						We're Hiring
					</div>
					
				</div>

			</div>
			<div className='footer--copyright'>
				<span className='footer--copyright__icon'>&copy; Weifeng Yang &#183; All Rights Reserved &#183; Feel Free to Contact</span>
			</div>
			<a className='footer--copyright__goUp' href='#goTop'><IoIosArrowUp className='footer--copyright__goUp--icon'/></a>
		
		</div>
	)
}
