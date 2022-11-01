import React, { FC } from 'react'
import Container from '../../../../../../components/container/Container';
import './Readmore.scss'

interface ReadmoreProps {
	loaded: boolean;
	slide: number;
	slideVisible: number;
}

const Readmore: FC<ReadmoreProps> = ({ loaded, slide, slideVisible }) => {

	return (
		<div className={['slide', loaded && slide === 1 ? 'available' : '', loaded && slideVisible === 1 ? 'visible' : ''].join(' ')}>
			<Container>
				<div className='slide__text'>
					<h4 className='slide__title'>We Care Take of</h4>
					<h6 className='slide__subtitle'>your home!</h6>
					<button className='slide__button'>Read More</button>
				</div>
			</Container>
			<div className='slide__background'>
				<img src="https://dthomefix.wpengine.com/wp-content/uploads/2016/05/slider2.jpg" alt="" />
			</div>
		</div>
	)
}

export default Readmore