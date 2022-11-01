import React, { FC } from 'react'
import './Container.scss'

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<section className='container'>
			{children}
		</section>
	)
}

export default Container