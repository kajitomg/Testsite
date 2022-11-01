import React, { FC } from 'react'
import './Pathtrek.scss'


interface PathtrekProps {
	children: React.ReactNode
}

const Pathtrek: FC<PathtrekProps> = ({ children }) => {
	return (
		<div className='pathtrek'>
			{children}
		</div>
	)
}

export default Pathtrek