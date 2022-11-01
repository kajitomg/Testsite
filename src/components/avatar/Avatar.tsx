import React, { useEffect, useRef, useState } from 'react'
import './Avatar.scss'

const Avatar = () => {

	const [scroll, setScroll] = useState<number>(0)
	const [visible, setVisible] = useState<boolean>(false)

	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	useEffect(() => {
		if (scroll > window.innerHeight) {
			setTimeout(() => {
				setVisible(true)
			}, 50)
		}
		if (scroll < window.innerHeight) {
			setTimeout(() => {
				setVisible(false)
			}, 50)
		}
	}, [scroll])
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className={['avatar', scroll > window.innerHeight ? 'available' : '', visible ? 'visible' : ''].join(' ')} onClick={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}>
			<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/totop.png" alt="" />
		</section>
	)
}

export default Avatar