import React from 'react'
import Container from '../../../../components/container/Container'
import './Contactus.scss'

const Contactus = () => {
	return (
		<section className='contactus'>
			<div className='contactus__background'></div>
			<Container>
				<div className='contactus__text'>
					<div className='contactus__slogan'>One Call Can Solve All Your House Problems</div>
				</div>
				<div className='contactus__image'>
					<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/08/telephone-150x150.png" alt="" />
				</div>
				<div className='contactus__phonenumber'>8020 - 2345 - 6789</div>
				<section className='contactus__more-contacts more-contacts'>
					<div className='more-contacts__text'>And, We Have More Options to Contact Us</div>
					<section className='more-contacts__applications applications'>
						<button className='applications__application application'>
							<a className='application__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/09/app_store_icon.png" alt="" />
							</a>
						</button>
						<button className='applications__application application'>
							<a className='application__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/09/google_play_icon.png" alt="" />
							</a>
						</button>
					</section>
				</section>
			</Container>
		</section>
	)
}

export default Contactus