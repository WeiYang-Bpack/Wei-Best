import React, {useEffect,Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, newReview, clearErrors } from '../../redux/actions/productActions'
import {useAlert} from 'react-alert';
import Loader from '../../components/customHooks/Loader';
import {Carousel} from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
export default function ProductDetails({match}) {
	const dispatch = useDispatch();

	const { loading, error, product } = useSelector(state => state.productDetails)

	const [count, setCount] = useState(1);

	useEffect(()=>{
		dispatch(getProductDetails(match.params.id))
		if(error){
			dispatch(clearErrors())
		}

		console.log(product.name)
		
	},[dispatch, alert, error, match.params.id])


	return (
		<Fragment>
			{loading ?<Loader/>:(
				<Fragment>
					<div className='productDetail'>
						<div className='productDetail--grid'>
							<div className='productDetail--grid__picture'>
								<Carousel pause='hover'>
									{product.images && product.images.map(image =>(
										<Carousel.Item key={image.public_id}>
											<img className='d-block w-100' src={image.url} alt={product.title}/>
										</Carousel.Item>
									))}

								</Carousel>

								
							</div>

						
						</div>

								
						<div className='productDetail--right'>
							<div className='productDetail--right__title'>{product.name}</div>
							<div className='productDetail--right__pnum'>Product # {product._id}</div>
							<div className='productDetail--right__line'></div>
							<div className='productDetail--right__reviews'>
							{product.ratings==undefined? 
							<StarRatings
							rating={0}
							starDimension='2rem'
							starSpacing='1rem'
							starRatedColor= '#FDCC0D'
							// changeRating={this.changeRating}
							numberOfStars={5}
							name='rating'
							/> 

							:
							<StarRatings
							rating={product.ratings}
							starDimension='2rem'
							starSpacing='1rem'
							starRatedColor= '#FDCC0D'
							// changeRating={this.changeRating}
							numberOfStars={5}
							name='rating'
							/> 
						
						
							}
							
						

						   <span className='productDetail--right__reviews--span'>({product.numOfReviews} Reviews)</span>
							</div>
							<div className='productDetail--right__line'></div>
							<div className='productDetail--right__price'>${product.price}</div>
							<div className='productDetail--right__buy'>
								<button className='subtractCart'>-</button>
								<span className='productDetail--right__span'>{count}</span>
								<button className='addCart'>+</button>
								<button className='clickButton'>ADD TO CART</button>
								
							</div>
							<div className='productDetail--right__line'></div>
							Status : <div className={product.stock > 0 ? 'productDetail--right__instock' : 'productDetail--right__outstock'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</div>
							<div className='productDetail--right__line'></div>
							<div className='productDetail--right__description'>DESCRIPTION:</div>
							<div className='productDetail--right__descriptionBox'>{product.description}</div>
							<div className='productDetail--right__line'></div>
							<div className='productDetail--right__soldBy'>Sold By: {product.seller}</div>

							<div><button className='clickButton'>Add a Review</button></div>
							
						</div>
					
					</div>
				
				</Fragment>
			)}
		</Fragment>
		
	)
}
