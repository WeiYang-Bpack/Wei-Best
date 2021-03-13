import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../redux/actions/cartAction'
import { BiTrash } from 'react-icons/bi'
import MetaData from '../Layout/MetaData'

export default function Cart() {
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // const removeCartItemHandler = (id) => {
    //     dispatch(removeItemFromCart(id))
    // }

    // const increaseQty = (id, quantity, stock) => {
    //     const newQty = quantity + 1;

    //     if (newQty > stock) return;

    //     dispatch(addItemToCart(id, newQty))
    // }

    // const decreaseQty = (id, quantity) => {

    //     const newQty = quantity - 1;

    //     if (newQty <= 0) return;

    //     dispatch(addItemToCart(id, newQty))

    // }

    // const checkoutHandler = () => {
    //     history.push('/login?redirect=shipping')
    // }




    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            <div className='Cart'>

                {cartItems.length === 0 ?
                    <div className='Cart--outerContainer'>
                        <div className='Cart--title'>
                            Your Cart is Empty
                        </div>
                    </div>
                    :
                    <div className='Cart--outerContainer'>
                        <div className='Cart--title'>Your Cart: {cartItems.length} items</div>
                        <div className='Cart--grid'>
                            <div className='Cart--grid__left'>


                                {cartItems.map(item => (
                                    <Fragment>
                                        <div className='Cart--grid__left--item'>
                                            <img className='Cart--grid__left--item__image' src={item.image} />
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            <div>Price: {item.price}</div>
                                            <div>quantity: {item.quantity}</div>
                                            <div>
                                                <BiTrash></BiTrash>
                                            </div>
                                        </div>
                                    </Fragment>

                                ))}



                            </div>

                            <div className='Cart--grid__right'>
                                ROGHJHTsafsafsafasfasfasfsa
                            </div>
                        </div>
                        
                        
                    </div>

                }
            </div>
        </Fragment>
    )
}
