import React, { useRef, useState } from 'react'
import Container from '../../../../components/container/Container'
import './Partners.scss'

const Partners = () => {
	const ref = useRef<null | any>(null)
	const [scroll, setScroll] = useState(0)

	return (
		<section className='partners'>
			<Container>
				<div className='partners__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>OUR PARTNERS</h4>
					<h6 className='name__subtitle'>Business Partners</h6>
				</div>
				<span className='partners__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='partners__partner-slider partner-slider'>
					<section className='partner-slider__elements elements' ref={ref}>
						<div className='partner-slider__element'>
							<div className='element__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/client-img1.png" alt="" />
							</div>
						</div>
						<div className='partner-slider__element'>
							<div className='element__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/client-img2.png" alt="" />
							</div>
						</div>
						<div className='partner-slider__element'>
							<div className='element__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/client-img3.png" alt="" />
							</div>
						</div>
						<div className='partner-slider__element'>
							<div className='element__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/client-img4.png" alt="" />
							</div>
						</div>
						<div className='partner-slider__element'>
							<div className='element__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/client-img5.png" alt="" />
							</div>
						</div>
					</section>
					<div className='partner-slider__buttons'>
						<div className='partner-slider__button' onClick={() => {
							ref.current.scrollTo({ left: scroll - ref.current.getBoundingClientRect().width, behavior: 'smooth' });
							if (scroll > 0) {
								setScroll(scroll - ref.current.getBoundingClientRect().width)
							}
						}}>
							<span></span>
							<span></span>
						</div>
						<div className='partner-slider__button' onClick={() => {
							ref.current.scrollTo({ left: scroll + ref.current.getBoundingClientRect().width, behavior: 'smooth' });
							if (scroll <= ref.current.getBoundingClientRect().width) {
								setScroll(scroll + ref.current.getBoundingClientRect().width)
							}
						}}>
							<span></span>
							<span></span>
						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Partners