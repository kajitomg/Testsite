import React from 'react'
import Container from '../../../../components/container/Container'
import './Pricing.scss'

const Pricing = () => {
	return (
		<section className='pricing'>
			<div className='pricing__background'>
				<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/fullwidth-bg.jpg" alt="" />
				<div className='pricing__background-black'></div>
			</div>
			<Container>
				<div className='pricing__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>OUR PRICING</h4>
					<h6 className='name__subtitle'>What Do We Cost</h6>
				</div>
				<span className='pricing__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='pricing__prices'>
					<div className='pricing__price price'>
						<div className='price__cost'><span>$</span> 15 <span>off</span></div>
						<h4 className='price__offer'>Water Softener & or Reverse Ssmosis Installation</h4>
						<button className='price__button'>Click to Print</button>
						<h6 className='price__subtitle'>Must be presented at the time of service. Can not be combined with any other offer</h6>
						<div className='price__text'><span>*</span>Conditions apply</div>
						<div className='price__wave'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
						</div>
					</div>
					<div className='pricing__price price'>
						<div className='price__cost'><span>$</span> 25 <span>off</span></div>
						<h4 className='price__offer'>Water Softener & or Reverse Ssmosis Installation</h4>
						<button className='price__button'>Click to Print</button>
						<h6 className='price__subtitle'>Must be presented at the time of service. Can not be combined with any other offer</h6>
						<div className='price__text'><span>*</span>Conditions apply</div>
						<div className='price__wave'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
						</div>
					</div>
					<div className='pricing__price price'>
						<div className='price__cost'><span>$</span> 50 <span>off</span></div>
						<h4 className='price__offer'>Water Softener & or Reverse Ssmosis Installation</h4>
						<button className='price__button'>Click to Print</button>
						<h6 className='price__subtitle'>Must be presented at the time of service. Can not be combined with any other offer</h6>
						<div className='price__text'><span>*</span>Conditions apply</div>
						<div className='price__wave'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
							<img src="https://dthomefix.wpenginepowered.com/wp-content/themes/homefix/images/wave.png" alt="" />
						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Pricing