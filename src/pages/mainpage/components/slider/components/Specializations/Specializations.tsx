import React, { FC } from 'react'
import Container from '../../../../../../components/container/Container'
import './Specializations.scss'

interface SpecializationsProps {
	loaded: boolean;
	slide: number;
	slideVisible: number;
}

const Specializations: FC<SpecializationsProps> = ({ loaded, slide, slideVisible }) => {
	return (
		<div className={['slide', loaded && slide === 2 ? 'available' : '', loaded && slideVisible === 2 ? 'visible' : ''].join(' ')}>
			<Container>
				<section className='slide__specializations'>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon1.png' alt="" />
						</div>
						<span className='specialization__name'>plumbing</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon2.png' alt="" />
						</div>
						<span className='specialization__name'>electrical</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon3.png' alt="" />
						</div>
						<span className='specialization__name'>flooring</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon4.png' alt="" />
						</div>
						<span className='specialization__name'>painting</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon5.png' alt="" />
						</div>
						<span className='specialization__name'>lighting</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon6.png' alt="" />
						</div>
						<span className='specialization__name'>flooring</span>
					</div>
					<div className='slide__specialization specialization'>
						<div className='specialization__image'>
							<img src='https://dthomefix.wpengine.com/wp-content/uploads/2016/05/icon7.png' alt="" />
						</div>
						<span className='specialization__name'>renovation</span>
					</div>
				</section>
			</Container>
			<div className='slide__background'>
				<img src="https://dthomefix.wpengine.com/wp-content/uploads/2016/05/slider1.jpg" alt="" />
			</div>
		</div>
	)
}

export default Specializations