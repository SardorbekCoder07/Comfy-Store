import { useLoaderData, useLocation, useNavigate } from 'react-router'
const PaginationContainer = () => {
	const { meta } = useLoaderData()
	const { pageCount, page } = meta.pagination

	const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
	const { pathname, search } = useLocation()
	const navigate = useNavigate()
	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search)
		searchParams.set('page', pageNumber)
		navigate(`${pathname}?${searchParams}`)
	}
	if (pageCount <= 1) {
		return null // No pagination needed if there's only one page
	}
	return (
		<div className='mt-16 flex justify-end '>
			<div className='join'>
				<button
					className='btn btn-xs sm:btn-md join-item'
					onClick={() => {
						let prevPage = page - 1
						if (prevPage < 1) prevPage == pageCount
						if (prevPage > 0) handlePageChange(prevPage)
					}}
				>
					Prev
				</button>
				{
					pages.map((pageNumber) => {
						return <button key={pageNumber}
							className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}
							onClick={() => handlePageChange(pageNumber)}>
							{pageNumber}
						</button>
					})
				}
				{
					pageCount > page ? (
						<button
							className='btn btn-xs sm:btn-md join-item'
							onClick={() => {
								let nextPage = page + 1
								if (nextPage < 1) nextPage == pageCount
								handlePageChange(nextPage)
							}}
						>
							Next
						</button>
					) : (null)
				}
			</div>
		</div>
	)
}

export default PaginationContainer