import React, { FC } from 'react'
import './Pathname.scss'


interface PathnameProps {
	children: React.ReactNode
}

const Pathname: FC<PathnameProps> = ({ children }) => {
	return (
		<span className='pathname'>
			{children}
		</span>
	)
}

export default Pathname