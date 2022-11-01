import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/container/Container'
import './Successrate.scss'

const Successrate = () => {


	const [happyClients, setHappyClients] = useState(0)
	const [projects, setProjects] = useState(0)
	const [rating, setRating] = useState(0)
	const [stafs, setStafs] = useState(0)
	const [view, setView] = useState(false)
	const ref = useRef<null | any>(null)


	function increaseNumber(maximum: number, func: any) {
		let number = 0
		func(0)
		const id: any = setInterval(() => {
			if (number >= maximum) {
				return clearInterval(id)
			}
			if (!view) {
				return clearInterval(id)
			}
			if (maximum > 2000) {
				if (number >= 4120) {
					return func(() => number = number + 1)
				}
				return func(() => number = number + 10)
			}
			func(() => number = number + 1)
		}, 2000 / maximum)
	}
	useEffect(() => {
		increaseNumber(4126, setHappyClients)
		increaseNumber(250, setProjects)
		increaseNumber(4, setRating)
		increaseNumber(38, setStafs)
	}, [view])



	const handleScroll = () => {
		if (ref.current.getBoundingClientRect().top < ref.current.getBoundingClientRect().height / 2 && ref.current.getBoundingClientRect().top > 0) {
			setView(true)
		}
		if (ref.current.getBoundingClientRect().top > ref.current.getBoundingClientRect().height / 2 && ref.current.getBoundingClientRect().top > 0) {
			setView(false)
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className='successrate' ref={ref}>
			<Container>
				<div className='successrate__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>OUR SUCCESS RATE</h4>
					<h6 className='name__subtitle'>What We have Done</h6>
				</div>
				<span className='successrate__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<div className='successrate__rates'>
					<div className='successrate__rate rate'>
						<div className='rate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/num-count1.png" alt="" />
						</div>
						<div className='rate__lines'>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className='rate__number'>{happyClients}+</div>
						<div className='rate__title'>HAPPY CLIENTS</div>
					</div>
					<div className='successrate__rate rate'>
						<div className='rate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/num-count2.png" alt="" />
						</div>
						<div className='rate__lines'>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className='rate__number'>{projects}+</div>
						<div className='rate__title'>PROJECTS COMPLETED</div>
					</div>
					<div className='successrate__rate rate'>
						<div className='rate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/num-count3.png" alt="" />
						</div>
						<div className='rate__lines'>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className='rate__number'>{rating}+</div>
						<div className='rate__title'>AVERAGE RATINGS</div>
					</div>
					<div className='successrate__rate rate'>
						<div className='rate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/num-count4.png" alt="" />
						</div>
						<div className='rate__lines'>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className='rate__number'>{stafs}+</div>
						<div className='rate__title'>QUALIFIED STAFS</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Successrate