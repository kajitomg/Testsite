import React, { FC } from 'react'
import './Pagecontent.scss'

interface PagecontentProps {
	children: React.ReactNode
}

const Pagecontent: FC<PagecontentProps> = ({ children }) => {
	return (
		<section className='pagecontent'>
			{children}
		</section>
	)
}

export default Pagecontent