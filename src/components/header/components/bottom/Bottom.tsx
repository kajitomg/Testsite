import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../../../container/Container';
import './Bottom.scss'

interface BottomProps {
	setAvailableBurger: (boolean: boolean) => void;
	setVisibleBurger: (boolean: boolean) => void;
	setAvailableNavigation: (number: number) => void;
	availableNavigation: number;
	headerHeight: number;
}

const Bottom: FC<BottomProps> = ({ setAvailableBurger, setVisibleBurger, headerHeight, availableNavigation, setAvailableNavigation }) => {

	const navigate = useNavigate()
	const [scroll, setScroll] = useState<number>(0)
	const fixedHeader = useRef<null | any>(null)
	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className={['bottom', scroll > headerHeight - (window.innerWidth > 767 ? fixedHeader.current?.offsetHeight / 2 : fixedHeader.current?.offsetHeight) ? 'available' : ''].join(' ')} ref={fixedHeader}>
			<Container>
				<div className='bottom__burger-button' onClick={() => { setAvailableBurger(true); setTimeout(() => setVisibleBurger(true), 10) }}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className='navigations'>
					<button className={['navigation', availableNavigation === 1 ? 'available' : ''].join(' ')} onClick={() => {
						setAvailableNavigation(1)
					}}>
						<span className='navigation__name' onClick={() => navigate('/home')}>Home</span>
						<div className='navigation__icon'>
						</div>
					</button>
					<button className={['navigation', availableNavigation === 2 ? 'available' : ''].join(' ')} onClick={() => {
						setAvailableNavigation(2)
					}}>
						<span className='navigation__name' onClick={() => navigate('/about')}>About</span>
						<div className='navigation__icon'>
						</div>
					</button>
					<button className={['navigation', availableNavigation === 3 ? 'available' : ''].join(' ')} onClick={() => {
						navigate('/services')
						setAvailableNavigation(3)
					}}>
						<span className='navigation__name'>Services</span>
						<div className='navigation__icon'>
						</div>
					</button>
					<button className={['navigation', availableNavigation === 4 ? 'available' : ''].join(' ')} onClick={() => {
						setAvailableNavigation(4)
					}}>
						<span className='navigation__name'>Contact</span>
						<div className='navigation__icon'>
						</div>
					</button>
				</nav>
				{/* <section className='header__search search'>
		<input className='search__input' type='text' placeholder='ENTER KEYWORD' />
		<input className='search__button' type='button' />
	</section> */}

			</Container>
		</section>
	)
}

export default Bottom