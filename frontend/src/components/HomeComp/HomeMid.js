import React from 'react'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';


export default function HomeMid() {
	return (
		<div id="homeMid--container" className="homeMid">

			<div className="homeMid--container">
			<Fade bottom>
				<h1 className='homeMid--container__header'>Discover</h1>
			
				<h1 className='homeMid--container__headerInfo'>GET THE NEWEST ITEMS</h1>
				<div className='homeMid--container__line'></div>
			</Fade>

			<Fade bottom>
			<div className='homeMid--container__description'>
					<div className='homeMid--container__description--info'>Our varied item shop features a  
					whole new array of different possibilities that bring the best and highest quality product to you. </div>
				<div className='homeMid--container__description--info'>Choose from Laptops like MacBook to SD card like sanDisk.</div>
				</div>
			</Fade>
				
			<Fade bottom>
				<div className='homeMid--container__div'>
					<Link className='homeMid--container__div--link' to='/contact'>Learn More</Link>
				</div>
			</Fade>
			
			</div>


			{/* Middle Container			 */}
			<div className='homeMid--container2'>
				<Fade bottom>
				<div className='homeMid--container2__header'>
						Feature Items
				</div>
				<div className='homeMid--container2__headerInfo'>
						GET YOURS BEFORE IT RUNS OUT
				</div>
				<div className='homeMid--container2__line'></div>
				</Fade>

				<Fade>
				<div className='homeMid--container2__picContainer'>
					<div className='homeMid--container2__picContainer--item'>

						<div className='homeMid--container2__picContainer--item__notice'>
							TOP SELLER
						</div>

						<div className='homeMid--container2__picContainer--item__picture'>
							<img src='https://cdn.mos.cms.futurecdn.net/obNHUnF85G2kHtApYvix5D-970-80.png.webp' className='homeMid--container2__picContainer--item__picture--info'>
							</img>
						</div>

						<div className='homeMid--container2__picContainer--item__foodPrice'>
							<div className='homeMid--container2__picContainer--item__foodPrice--title'>
								RTX 3080 GPU
							</div>
							
							<div className='homeMid--container2__picContainer--item__foodPrice--price'>
								$699.99
							</div>
							
						</div>
						<div className='homeMid--container2__picContainer--item__description'>
						The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
						</div>
							
					</div>
					<div className='homeMid--container2__picContainer--item'>
					<div className='homeMid--container2__picContainer--item__notice'>
							BUDGET FRIENDLY
					</div>
						<div className='homeMid--container2__picContainer--item__picture'>
						<img src='https://images-na.ssl-images-amazon.com/images/I/61wtfkbzUIL._AC_SL1093_.jpg' className='homeMid--container2__picContainer--item__picture--info'>
							</img>
						</div>
						<div className='homeMid--container2__picContainer--item__foodPrice'>
							<div className='homeMid--container2__picContainer--item__foodPrice--title'>
								San Disk (32gb - 512GB)
							</div>
							
							<div className='homeMid--container2__picContainer--item__foodPrice--price'>
								$49.99 - $299.99
							</div>
						</div>
						<div className='homeMid--container2__picContainer--item__description'>
						Our most powerful SD™ UHS-I memory card yet delivers performance that elevates your creativity. With shot speeds of up to 90MB/s6 and UHS speed Class 3 (U3)2 recording, you’re ready to capture stunning high-resolution, stutter-free 4K UHD video.
						</div>
					</div>
					<div className='homeMid--container2__picContainer--item'>
					<div className='homeMid--container2__picContainer--item__notice'>
							NEW ITEM
						</div>
						<div className='homeMid--container2__picContainer--item__picture'>
						<img src='https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg' className='homeMid--container2__picContainer--item__picture--info'>
							</img>
						</div>

						<div className='homeMid--container2__picContainer--item__foodPrice'>
						<div className='homeMid--container2__picContainer--item__foodPrice--title'>
								M1 MacBook PRO
							</div>
							
							<div className='homeMid--container2__picContainer--item__foodPrice--price'>
								$1299.99
							</div>
						</div>
						<div className='homeMid--container2__picContainer--item__description'>
						The MacBook Air (M1, 2020) is easily one of the most exciting Apple laptops of recent years. Its M1 chip is a real game-changer, and the ability to run both legacy apps, new M1-optimized apps and iOS apps is very impressive. Battery life is also great, and performance is excellent as well.
						</div>
					</div>
				</div>
				</Fade>
				
				<Fade>
				<div className='homeMid--container__div'>
					<Link className='homeMid--container__div--link' to='/shop'>VIEW OUR SHOP</Link>
				</div>
				</Fade>
			</div>

			

			
			
		</div>
	)
}


