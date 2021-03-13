import React from 'react'
import {GiSofa} from 'react-icons/gi';
import Fade from 'react-reveal/Fade';
export default function HomeBot() {
	return (
		<div className='homeslider'>
			<Fade left>
					<div className='homeslider--top'>
						IMAGE
					</div>
			</Fade>
			<Fade right>
			<div className='homeslider--bottom'>

				<div className='homeslider--bottom__inner'>
					<GiSofa className='homeslider--bottom__inner--icon'></GiSofa>
					<div className='homeslider--bottom__inner--title'>
						BUILD YOUR DREAM SETUP
					</div>
					
					<div className='homeMid--container2__line'></div>

					<div className='homeslider--bottom__inner__info'>
					The right technology can make or break the experience of a game as well as your performance. For example, gaming keyboards are specifically designed to respond quickly to in-game elements. And, in the heat of competition, even half a second or a fraction of a second can be the difference between winning and losing.
					</div>

				</div>
				
			</div>
			</Fade>
		</div>
	)
}
