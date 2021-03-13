import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import Loader from '../components/customHooks/Loader';
import Pagination from 'react-js-pagination';
import 'rc-slider/assets/index.css';
import MetaData from '../components/Layout/MetaData';
import Slider, { Range } from 'rc-slider';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);


// const {createSliderWithTooltip} = Slider;
// const Range = createSliderWithTooltip(Slider.Range)

export default function Shop({ match }) {

	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();
	const { loading, products, error, productCount, resPerPage, filteredProductsCount } = useSelector(state => state.products);
	const [price, setPrice] = useState([1, 1000])
	const [category, setCategory] = useState('')

	const categories = [
		'Electronics',
		'Cameras',
		'Laptops',
		'Accessories',
		'Headphones',
		'Food',
		'Books',
		'Clothes/Shoes',
		'Beauty/Health',
		'Sports',
		'Outdoor',
		'Home'
	]
	const keyword = match.params.keyword;

	useEffect(() => {
		if (error) {
			alert.success('success')
			return alert.error(error)
		}

		dispatch(getProducts(keyword, currentPage, price, category));
	}, [dispatch, keyword, currentPage, price, category])


	const setCurrentPageNo = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
	
	
	
	let count = filteredProductsCount;
    


	return (

		<Fragment>
			<MetaData title="Shop"></MetaData>
			{loading ? <Loader /> : (



				<div className='shop'>
					<div className='shop--container'>

						<div className='shop--container__title'>
							<h1 className='shop--container__title--header'>Shop</h1>
						</div>

						<div className='filter'>
							<h2>Filter</h2>
							<div className='filter--price'>
								<div>
									${price[0]}
								</div>
								<div>
									${price[1]}
								</div>
							</div>
							<div className='filter--bar'>
				
							<Range
								
								min={1}
								max={1000}
								defaultValue={[1, 1000]}
								tipFormatter={value => `$${value}`}
								
								value={price}
								onChange={price => setPrice(price)}
							/>
							</div>
							

							<div>
							<div className='filter--category'>
									{categories.map(category => (
										<div className='filter--category__single'
											style={{
												cursor: 'pointer',
												listStyleType: 'none'
											}}
											key={category}
											onClick={() => setCategory(category)}
										>
											{category}
										</div>
									))}
								</div>
							</div>
						</div>


						<div className='shop--container__products'>

							{products && products.map(product => (

								<div key={product._id} className='shop--container__products--single'>
									<img className="shop--container__products--single__image" src={product.images[0].url} ></img>

									<Link to={`/product/${product._id}`} className="shop--container__products--single__anchor" >{product.name}</Link>
									<div className="shop--container__products--single__review">

										{product.ratings == undefined ?
											<StarRatings
												rating={0}
												starDimension='2rem'
												starSpacing='1rem'
												starRatedColor='#FDCC0D'
												// changeRating={this.changeRating}
												numberOfStars={5}
												name='rating'
											/>

											:
											<StarRatings
												rating={product.ratings}
												starDimension='2rem'
												starSpacing='1rem'
												starRatedColor='#FDCC0D'
												// changeRating={this.changeRating}
												numberOfStars={5}
												name='rating'
											/>


										}


										<div className='shop--container__products--single__review--no' id='no_of_reviews'>({product.numOfReviews} Reviews)</div>
									</div>
									<h2>${product.price}</h2>
									<Link to={`/product/${product._id}`} id='view_btn' className='shop--container__products--single__button'>View Details</Link>

								</div>



							))}
						</div>
					</div>

					{count==0?
						<></>
							
						:
						<div className="d-flex justify-content-center mt-5">
						
						<Pagination
						activePage={currentPage}
						itemsCountPerPage={resPerPage}
						totalItemsCount={count}
						onChange={setCurrentPageNo}
						nextPageText={'Next'}
						prevPageText={'Prev'}
						firstPageText={'First'}
						lastPageText={'Last'}
						itemClass="page-item"
						linkClass="page-link"
					/>
					


					</div>

					}
					


				</div>
			)}

		</Fragment>

	)
}
