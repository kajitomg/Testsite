import React, { FC } from 'react'
import './Estimate.scss'

interface EstimateProps {
	elementAvailable: number;
	elementVisible: number;
}

const Estimate: FC<EstimateProps> = ({ elementAvailable, elementVisible }) => {
	return (
		<section className={['estimate', elementAvailable === 2 ? 'available' : '', elementVisible === 2 ? 'visible' : ''].join(' ')}>
			<section className='estimate__image'>
				<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/09/get-an-estimate.jpg" alt="" />
			</section>
			<section className='estimate__content'>
				<div className='estimate__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>ESTIMATE FORM</h4>
					<h6 className='name__subtitle'>For Your Convenience</h6>
				</div>
				<span className='estimate__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a nibh ornare tristique laoreet ac odio. Donec ac eleifend lacus. Etiam bibendum nec mi non consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
				<form className='estimate__form' action="formdata" method="post">
					<input type='text' name='name' placeholder='Your Name*' id='' />
					<input type='email' name='email' placeholder='Your Email*' id='' />
					<input type='number' name='phonenumber' placeholder='Phone Number*' id='' />
					<select name='project'>
						<option>Project</option>
						<option>Project 1</option>
					</select>
					<textarea name='messagearea' placeholder='Message Area*' cols={30} rows={10}></textarea>
					<input type="submit" value="Send Email" />
				</form>
			</section>
		</section>
	)
}

export default Estimate