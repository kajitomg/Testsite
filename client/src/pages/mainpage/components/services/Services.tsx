import React from 'react'
import Container from '../../../../components/container/Container'
import './Services.scss'
import home from './../../../../images/home.png'

const Services = () => {
	return (
		<section className='services'>
			<Container>
				<div className='services__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>OUR SERVICES</h4>
					<h6 className='name__subtitle'>What We have Done</h6>
				</div>
				<span className='services__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='services__plates'>
					<div className='services__plate plate'>
						<div className='plate__content content'>
							<div className='content__image'>
								<img src={home} alt="" />
							</div>
							<span className='content__name'>Plumbing Services</span>
						</div>
						<div className='plate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2016/05/blog-img8-1024x630.jpg" alt="" />
						</div>
					</div>
					<div className='services__plate plate'>
						<div className='plate__content content'>
							<div className='content__image'>
								<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/08/tab-img11-dark.png' alt="" />
							</div>
							<span className='content__name'>Elictrical Services</span>
						</div>
						<div className='plate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/Image-Caption10-1.jpg" alt="" />
						</div>
					</div>
					<div className='services__plate plate'>
						<div className='plate__content content'>
							<div className='content__image'>
								<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/08/tab-img7-dark.png' alt="" />
							</div>
							<span className='content__name'>Plumbing Services</span>
						</div>
						<div className='plate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/Image-Caption6-4.jpg" alt="" />
						</div>
					</div>
					<div className='services__plate plate'>
						<div className='plate__content content'>
							<div className='content__image'>
								<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/08/tab-img3-dark.png' alt="" />
							</div>
							<span className='content__name'>Plumbing Services</span>
						</div>
						<div className='plate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/Image-Caption10-3.jpg" alt="" />
						</div>
					</div>
					<div className='services__plate plate'>
						<div className='plate__content content'>
							<div className='content__image'>
								<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/08/tab-img5-dark.png' alt="" />
							</div>
							<span className='content__name'>Plumbing Services</span>
						</div>
						<div className='plate__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/Image-Caption6-2.jpg" alt="" />
						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Services