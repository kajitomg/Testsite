import React from 'react'
import './Contacts.scss'

const Contacts = () => {
	return (
		<section className='contacts'>
			<div className='contact'>
				<div className='contact__icon'>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width='24px' height='24px'>
						<g>
							<g>
								<path d="m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z" />
								<path d="m344.1,276.4h-88.1c-11.3,0-20.4-9.1-20.4-20.4v-157.8c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v137.4h67.7c11.3,0 20.4,9.1 20.4,20.4 5.68434e-14,11.3-9.1,20.4-20.4,20.4z" />
							</g>
						</g>
					</svg>
				</div>
				<div className='contact__text'>
					<h6 className='contact__name'>OPENING HOURS</h6>
					<span className='contact__info'>Mon - Fri : 9 AM - 8 PM</span>
				</div>
			</div>
			<div className='contact'>
				<div className='contact__icon'>
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						viewBox="0 0 100 100" enableBackground="new 0 0 100 100" width='24px' height='24px'>
						<path d="M77.7,63.9l-6.2-5c-2.1-1.7-5.1-1.801-7.3-0.2L58.3,63c-0.8,0.6-1.899,0.5-2.6-0.2L46,54l-8.9-9.8
	c-0.7-0.7-0.8-1.8-0.2-2.6l4.3-5.9c1.6-2.2,1.5-5.2-0.2-7.3l-5-6.2c-2.2-2.8-6.4-3-8.9-0.5l-5.4,5.4c-1.2,1.2-1.8,2.9-1.8,4.5
	c0.7,12.7,6.5,24.8,15,33.3s20.5,14.3,33.3,15c1.7,0.1,3.3-0.601,4.5-1.801L78.1,72.7C80.8,70.3,80.5,66.1,77.7,63.9z"/>
					</svg>
				</div>
				<div className='contact__text'>
					<h6 className='contact__name'>CALL US</h6>
					<span className='contact__info'>+(10) 123 456 7966</span>
				</div>
			</div>
			<div className='contact'>
				<div className='contact__icon'>
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						viewBox="0 0 330.001 330.001" width='24px' height='24px'>
						<g id="XMLID_348_">
							<path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
							/>
							<polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	" />
						</g>

					</svg>
				</div>
				<div className='contact__text'>
					<h6 className='contact__name'>MAIL US</h6>
					<span className='contact__info'><button>info@example.com</button></span>
				</div>
			</div>
		</section>
	)
}

export default Contacts