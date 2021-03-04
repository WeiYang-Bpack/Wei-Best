import React from 'react'
import {Link,NavLink, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {MdLocalPhone} from 'react-icons/md';
import {GrLinkedinOption} from 'react-icons/gr';
import {SiGithub} from 'react-icons/si';
import {TiContacts} from 'react-icons/ti';
import {IoIosArrowDown} from 'react-icons/io';

export default function HomeTop() {
	
	let history = useHistory();


	return (
			
			<div className="homeTop">
			<div id='goTop' className='homeTop--container'>
			<Fade bottom>
				<h1 className='homeTop--container__header'>Welcome</h1>
				<p className='homeTop--container__headerInfo'>BEST ECOM WEBSITE</p>
				<div className='homeTop--container__line'/>
				<div className='homeTop--container__description'>Best price in the country. Take a look!</div>
			

		
				<div className='homeTop--container__buttons'>
					<Link className='homeTop--container__buttons--link1' to='/shop'>Shop Now</Link>
					<Link className='homeTop--container__buttons--link2' to='/contact'>Information</Link>
				</div>
				</Fade>

				
				<div className="homeTop--phone">
					<MdLocalPhone className='homeTop--phone__icon'></MdLocalPhone>
					(626) 123 - 4567
				</div>

				<div className="homeTop--socialMedia">
					<a className="homeTop--socialMedia__anchor" href="https://www.linkedin.com/in/weifeng-yang-25b866202/">
					<GrLinkedinOption className="homeTop--socialMedia__icon"></GrLinkedinOption>
					</a>

					<a className="homeTop--socialMedia__anchor" href="https://github.com/WeiYang-Bpack">
					<SiGithub className="homeTop--socialMedia__icon"></SiGithub>
					</a>
					

					<a className="homeTop--socialMedia__anchor" href="mailto:weiyang2270@gmail.com">
					<TiContacts className="homeTop--socialMedia__icon"></TiContacts>
					</a>
					
				</div>

				<Fade bottom>
				<div className="homeTop--arrowDown">
					<a className="homeTop--arrowDown__icon--a" href="#homeMid--container">
					<IoIosArrowDown className="homeTop--arrowDown--a__icon"></IoIosArrowDown>
					</a>
				
				</div>
				</Fade>
			</div>
		</div>


	)
}
