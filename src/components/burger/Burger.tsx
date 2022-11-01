import React, { FC } from 'react'
import Navigations from './components/navigations/Navigations';
import './Burger.scss'

interface BurgerProps {
	availableBurger: boolean;
	visibleBurger: boolean;
	setAvailableBurger: (boolean: boolean) => void;
	setVisibleBurger: (boolean: boolean) => void;
	setAvailableNavigation: (number: number) => void;
	availableNavigation: number;
}

const Burger: FC<BurgerProps> = ({ availableBurger, setAvailableBurger, visibleBurger, setVisibleBurger, availableNavigation, setAvailableNavigation }) => {
	return (
		<section className={['burger', availableBurger ? 'available' : '', visibleBurger ? 'visible' : ''].join(' ')}>
			<div className='burger__shadow' onClick={() => { setVisibleBurger(false); setTimeout(() => setAvailableBurger(false), 400) }}></div>
			<div className='burger__content'>
				<div className='burger__button' onClick={() => { setVisibleBurger(false); setTimeout(() => setAvailableBurger(false), 400) }}>
					<span></span>
					<span></span>
				</div>
				<Navigations
					setAvailableNavigation={setAvailableNavigation}
					availableNavigation={availableNavigation}
				/>
			</div>
		</section>
	)
}

export default Burger