import React, { FC, ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Burger from '../burger/Burger'
import Container from '../container/Container'
import Bottom from './components/bottom/Bottom'
import Top from './components/top/Top'
import './Header.scss'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {

	const [scroll, setScroll] = useState<number>(0)
	const [availableNavigation, setAvailableNavigation] = useState<number>(1)
	const [availableBurger, setAvailableBurger] = useState(false)
	const [visibleBurger, setVisibleBurger] = useState(false)

	const header = useRef<null | any>(null)

	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (window.location.pathname === '/about') {
			setAvailableNavigation(2)
		}
		if (window.location.pathname === '/services') {
			setAvailableNavigation(3)
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	return (
		<header className='header' ref={header}>
			<Container>
				<Top />
				<Burger
					availableBurger={availableBurger}
					visibleBurger={visibleBurger}
					setAvailableBurger={setAvailableBurger}
					setVisibleBurger={setVisibleBurger}
					setAvailableNavigation={setAvailableNavigation}
					availableNavigation={availableNavigation}

				/>
				<Bottom
					headerHeight={header.current?.offsetHeight}
					setAvailableBurger={setAvailableBurger}
					setVisibleBurger={setVisibleBurger}
					setAvailableNavigation={setAvailableNavigation}
					availableNavigation={availableNavigation}
				/>
			</Container>
		</header >
	)
}

export default Header