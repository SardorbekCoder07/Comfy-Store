import { useSelector } from 'react-redux'
import { CartItemsList, SectionTitle, CartTotals } from '../components'
import { Link } from 'react-router'
const Cart = () => {
	//temp
	const user = JSON.parse(localStorage.getItem('user')) || null
	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

	if (numItemsInCart === 0) {
		return <SectionTitle text={'Your cart is enmpty'} />
	}
	return (
		<>
			<SectionTitle text={'Shopping cart'} />
			<div className='mt-8 grid gap-8 lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
				</div>
				<div className='lg:col-span-4 lg:pl-4'>
					<CartTotals />
					{
						user ? (
							<Link to={'/checkout'} className='btn btn-primary btn-block mt-8'>
								procced to checkout
							</Link>
						) : (
							<Link to={'/login'} className='btn btn-primary btn-block mt-8'>
								Please login
							</Link>
						)
					}
				</div>

			</div>
		</>
	)
}

export default Cart
