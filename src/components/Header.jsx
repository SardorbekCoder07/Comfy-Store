import { Link } from 'react-router'

const Header = () => {
	return (
		<header className='bg-neutral py-2 text-neutral-content'>
			<div className='align-element flex justify-center sm:justify-end'>
				<div className='flex gap-x-6 justify-center items-center'>
					<Link to='/login' className='link link-hover text-xs sm:text-sm'>
						Sign in / Guest
					</Link>
					<Link to='/register' className='link link-hover text-xs sm:text-sm'>
						Create Account
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
