import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Contacts from '../contacts/Contacts'
import './Top.scss'

interface TopProps {
}

const Top: FC<TopProps> = ({ }) => {

	const navigate = useNavigate()

	return (
		<section className='top'>
			<div className='top__logo' onClick={() => { navigate('/home') }}>
				<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/logo.png" alt="logo" />
			</div>
			<Contacts />
		</section>
	)
}

export default Top