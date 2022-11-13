import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pathtrek.scss'


interface PathtrekProps {
	children: React.ReactNode
}

const Pathtrek: FC<PathtrekProps> = ({ children }) => {
	const navigate = useNavigate()
	return (
		<div className='pathtrek'>
			<button onClick={() => navigate('/home')}>Home</button>
			<span>/</span>
			{children}
		</div>
	)
}

export default Pathtrek