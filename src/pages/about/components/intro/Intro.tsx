import React from 'react'
import Container from '../../../../components/container/Container'
import './Intro.scss'
import image from './../../../../images/brush.png';

const Intro = () => {
	return (
		<section className='intro'>
			<Container>
				<section className='intro__row'>
					<section className='intro__column'>
						<div className='intro__name name'>
							<div className='name__logo'>
								<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png' alt="" />
							</div>
							<h4 className='name__title'>A SMALL INTRO</h4>
							<h6 className='name__subtitle'>What We Doing</h6>
						</div>
						<span className='intro__text'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</span>
						<span className='intro__text'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</span>
						<div className='intro__qualities'>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Timely
							</div>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Responsible
							</div>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Conscientious
							</div>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Quick To Respond
							</div>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Honest
							</div>
							<div className='intro__quality'>
								<img src={image} alt="" />
								Flexible Price
							</div>
						</div>
						<span className='intro__text'>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</span>
						<span className='intro__text'>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</span>
						<a href="" className='intro__button'>
							<button>
								Book a Job
							</button>
						</a>

					</section>
					<section className='intro__column'>
						<div className='intro__image'>
							<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/about-img.jpg' alt="" />
						</div>
					</section>
				</section>
			</Container>
		</section>
	)
}

export default Intro