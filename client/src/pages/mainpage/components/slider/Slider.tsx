import React, { FC, useEffect, useState } from 'react'
import Container from '../../../../components/container/Container';
import Readmore from './components/Readmore/Readmore';
import Specializations from './components/Specializations/Specializations';
import './Slider.scss'

interface SliderProps {
	header: number;
}

const Slider: FC<SliderProps> = ({ header }) => {

	let style = { 'height': header ? window?.innerHeight - header : 0 } as React.CSSProperties;
	const [slide, setSlide] = useState<number>(1)
	const [slideVisible, setSlideVisible] = useState<number>(1)
	const [loaded, setLoaded] = useState<boolean>(false)


	const handleScroll = () => {
		setLoaded(true)
	};
	useEffect(() => {
		window.addEventListener("load", handleScroll);
		return () => window.removeEventListener("load", handleScroll);
	}, []);
	useEffect(() => {
		setSlideVisible(0)
		setTimeout(() => {
			setSlideVisible(1)
		}, 0)
		setLoaded(true)
	}, [loaded]);

	return (
		<section className='slider' style={style}>
			<Readmore loaded={loaded} slide={slide} slideVisible={slideVisible} />
			<Specializations loaded={loaded} slide={slide} slideVisible={slideVisible} />
			<div className='slider__buttons'>
				<Container>
					<div className='buttons'>
						<button className={['slider__button', slide === 1 ? 'available' : ''].join(' ')} onClick={() => {
							setSlide(1)
							setTimeout(() => {
								setSlideVisible(1)
							})
						}}></button>
						<button className={['slider__button', slide === 2 ? 'available' : ''].join(' ')} onClick={() => {
							setSlide(2)
							setTimeout(() => {
								setSlideVisible(2)
							})
						}}></button>
					</div>
				</Container>
			</div>
			<div className='slider__shadow'></div>
		</section>
	)
}

export default Slider