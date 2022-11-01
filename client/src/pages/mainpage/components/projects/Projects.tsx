import React from 'react'
import Container from '../../../../components/container/Container'
import './Projects.scss'

const Projects = () => {
	return (
		<section className='projects'>
			<Container>
				<div className='projects__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>RECENT PROJECTS</h4>
					<h6 className='name__subtitle'>A Small Gallery of Us</h6>
				</div>
				<span className='projects__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='projects__elements'>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-1-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Cras tristique purus non lacus
							</span>
						</div>
					</div>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-2-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Duis fermentum felis
							</span>
						</div>
					</div>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-3-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Quisque id maximus leo
							</span>
						</div>
					</div>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-4-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Proin venenatis felis
							</span>
						</div>
					</div>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-5-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Aenean vitae enim rhoncus
							</span>
						</div>
					</div>
					<div className='projects__element element'>
						<div className='element__background'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2014/01/gallery-img-6-640x480.jpg" alt="" />
						</div>
						<div className='element__content'>
							<span className='element__text'>
								Donec in maximus augue
							</span>
						</div>
					</div>
				</section>
				<button className='projects__button'>View All Projects</button>
			</Container>
		</section>
	)
}

export default Projects