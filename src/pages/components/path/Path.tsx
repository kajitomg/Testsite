import React, { FC } from 'react'
import './Path.scss';


interface PathProps {
	children: React.ReactNode
}

const Path: FC<PathProps> = ({ children }) => {
	return (
		<section className='path'>
			{children}
		</section>
	)
}

export default Path