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
                        <div className='Cart--title'>YOUR SHOPPING CART : {cartItems.length} items</div>
                        <div className='Cart--innerContainer'>

                            <div>
                                <table className='Cart--innerContainer__table'>
                                    <tr className='Cart--innerContainer__table--tr' >
                                        <th className='Cart--innerContainer__table--tr__th'>
                                            <h3>PRODUCT</h3>
                                        </th>
                                        <th className='Cart--innerContainer__table--tr__th'>

                                        </th>
                                        <th className='Cart--innerContainer__table--tr__th'>
                                           <h3>QTY</h3> 
                                        </th>
                                        <th className='Cart--innerContainer__table--tr__th'>
                                           <h3>PRICE</h3> 
                                        </th>
                                        <th className='Cart--innerContainer__table--tr__th'>
                                           <h3>SUBTOTAL</h3> 
                                        </th>
                                        <th className='Cart--innerContainer__table--tr__th'>
                                          
                                        </th>
                                    </tr>


                                    {cartItems.map(item => (
                                        <tr className='Cart--innerContainer__table--tr'>
                                            <td className='Cart--innerContainer__table--td'><img className='Cart--innerContainer__table--td__colimage' src={item.image} /></td>
                                            <td className='Cart--innerContainer__table--td'><Link to={`/product/${item.product}`}><h4>{item.name}</h4></Link></td>
                                            
                                            <td className='Cart--innerContainer__table--td'><h4><input type='number' class="form-control count d-inline" value={item.quantity} readOnly></input></h4></td>
                                            <td className='Cart--innerContainer__table--td'><h3>${item.price}</h3></td>
                                            <td className='Cart--innerContainer__table--td'><h3>${item.price*item.quantity}</h3></td>
                                            <td className='Cart--innerContainer__table--td'><h3><BiTrash></BiTrash></h3></td>
                                        </tr>


                                    ))}

                                </table>

                            </div>

                            <div className='Cart--innerContainer__checkout'>
                                <div className='Cart--innerContainer__checkout--subtotal'>SUBTOTAL $387.28</div>
                                <div className='Cart--innerContainer__checkout--subtotal'>Tax $8271</div>
                                <div className='Cart--innerContainer__checkout--subtotal'>TOTAL $8272</div>
                                <div className='Cart--innerContainer__checkout__cButton'>
                                    <button className='Cart--innerContainer__checkout--subtotal__button'>
                                        SECURE CHECKOUT
                                    </button>
                                </div>
                            </div>






                        </div>


                    </div>

                }
            </div>
        </Fragment>
    )
}
