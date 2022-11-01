import React from 'react'
import Container from '../../../../components/container/Container'
import './Testimonials.scss'

const Testimonials = () => {
	return (
		<section className='testimonials'>
			<Container>
				<div className='testimonials__name name'>
					<div className='name__logo'>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png" alt="" />
					</div>
					<h4 className='name__title'>OUR TESTIMONIALS</h4>
					<h6 className='name__subtitle'>What Other's Say</h6>
				</div>
				<span className='testimonials__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
				<section className='testimonials__cards'>
					<div className='testimonials__card card'>
						<div className='card__title'>Graece donan, Latine voluptatem vocant</div>
						<div className='card__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos controversia himenaeos.</div>
						<div className='card__person person'>
							<div className='person__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/testimonial-img1.jpg" alt="" />
							</div>
							<div className='person__name'>Sheena</div>
							<div className='person__lines'>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className='person__position'>Team Leader,</div>
							<div className='person__subposition'>Solibilis Technologies</div>
						</div>
					</div>
					<div className='testimonials__card card'>
						<div className='card__title'>Atqui reperies inquit, quidem pertinacem</div>
						<div className='card__subtitle'>Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, accepimus. Nam et complectitur verbis, quod vult, et dicit plane. Intellegi quidem, ut propter aliam rem, verbi gratia propter nonne merninisti voluptatem.</div>
						<div className='card__person person'>
							<div className='person__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/testimonial-img5.jpg" alt="" />
							</div>
							<div className='person__name'>Dania Rose</div>
							<div className='person__lines'>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className='person__position'>CEO,</div>
							<div className='person__subposition'>Skyline Infrastructure</div>
						</div>
					</div>
					<div className='testimonials__card card'>
						<div className='card__title'>Sed venio ad crimen, saepius meaberrare</div>
						<div className='card__subtitle'>Qualem igitur hominem natura inchoavit? Quam ob rem tandem, inquit, non Sed potestne rerum maior esse Duo Reges. constructio interrete. Quid affers cur omnium horum magister non iucundissime vixerit.</div>
						<div className='card__person person'>
							<div className='person__image'>
								<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/testimonial-img2.jpg" alt="" />
							</div>
							<div className='person__name'>Christopher</div>
							<div className='person__lines'>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className='person__position'>Co-Founder,</div>
							<div className='person__subposition'>Tech World Builders</div>
						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Testimonials