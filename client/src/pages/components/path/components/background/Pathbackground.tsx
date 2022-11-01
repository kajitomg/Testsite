import React, { FC } from 'react'
import './Pathbackground.scss';

interface PathbackgroundProps {
	children: React.ReactNode
}

const Pathbackground: FC<PathbackgroundProps> = ({ children }) => {
	return (
		<section className='pathbackground'>
			{children}
		</section>
	)
}

export default Pathbackground