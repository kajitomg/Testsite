import React, { FC } from 'react'
import './Book.scss'

interface BookProps {
	elementAvailable: number;
	elementVisible: number;
}

const Book: FC<BookProps> = ({ elementAvailable, elementVisible }) => {
	return (
		<section className={['book', elementAvailable === 1 ? 'available' : '', elementVisible === 1 ? 'visible' : ''].join(' ')}>
			<section className='book__content'>
				<div className='book__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>BOOK ONLINE</h4>
					<h6 className='name__subtitle'>For Appointment</h6>
				</div>
				<span className='book__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante a nibh ornare tristique laoreet ac odio. Donec ac eleifend lacus. Etiam bibendum nec mi non consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
				<form className='book__form' action="formdata" method="post">
					<input type='text' name='name' placeholder='Name' id='' />
					<input type='email' name='email' placeholder='Email' id='' />
					<select name='service' >
						<option>Type of Service</option>
						<option>Plumbing</option>
						<option>Elictrical</option>
						<option>Carpentary</option>
						<option>Painting</option>
					</select>
					<input type='date' name='' id='' placeholder='Preferred Date' />
					<select name='person'>
						<option>Name of Person</option>
						<option>Angel Sienna</option>
						<option>Lindsey Lohan</option>
						<option>James Bladwin</option>
						<option>John</option>
					</select>
					<input type="submit" value="Fix An Appointment" />
				</form>
			</section>
			<section className='book__image'>
				<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/09/book-online.jpg" alt="" />
			</section>
		</section>
	)
}

export default Book