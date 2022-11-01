import React from 'react'
import Container from '../../../../components/container/Container'
import './Workstatus.scss'

const Workstatus = () => {
	return (
		<section className='workstatus'>
			<Container>
				<div className='workstatus__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>HOW IT WORKS</h4>
					<h6 className='name__subtitle'>What We have Done</h6>
				</div>
				<span className='workstatus__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='workstatus__statuses'>
					<div className='workstatus__status status'>
						<div className='status__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/man-with-desk.png" alt="" />
						</div>
						<h4 className='status__title'>1. Book Online</h4>
						<h6 className='status__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.</h6>
						<div className='status__arrow'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='workstatus__status status'>
						<div className='status__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/hand-shake.png" alt="" />
						</div>
						<h4 className='status__title'>2. Confirmation</h4>
						<h6 className='status__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.</h6>
						<div className='status__arrow'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='workstatus__status status'>
						<div className='status__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/tool.png" alt="" />
						</div>
						<h4 className='status__title'>3. Work Status</h4>
						<h6 className='status__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.</h6>
						<div className='status__arrow'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='workstatus__status status'>
						<div className='status__image'>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/tag.png" alt="" />
						</div>
						<h4 className='status__title'>4. Completion</h4>
						<h6 className='status__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.</h6>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Workstatus