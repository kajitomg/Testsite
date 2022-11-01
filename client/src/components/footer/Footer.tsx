import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../container/Container';
import './Footer.scss';

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
	const navigate = useNavigate()

	return (
		<footer className='footer'>
			<div className='footer__background'>
				<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/footerbg.png?id=45" alt="" />
			</div>
			<Container>
				<section className='footer__columns'>
					<div className='footer__column column'>
						<h4 className='column__title'>ABOUT OUR <span>GLOBAL</span></h4>
						<div className='column__line'></div>
						<div className='column__content'>
							<h6 className='column__subtitle'>That this group would somehow form a family that's the way we all became the Brady Bunch. Doin' it our way. There's nothing we wont try never heard word.</h6>
							<button className='column__button'>Buy Theme</button>
						</div>
					</div>
					<div className='footer__column column'>
						<h4 className='column__title'>USEFUL <span>LINKS</span></h4>
						<div className='column__line'></div>
						<div className='column__content'>
							<div className='column__links'>
								<span className='column__link' onClick={() => { navigate('/') }}>About Us</span>
								<span className='column__link' onClick={() => { navigate('/') }}>Services</span>
								<span className='column__link'>Contact</span>
							</div>
						</div>
					</div>
					<div className='footer__column column'>
						<h4 className='column__title'>OPENING <span>HOURS</span></h4>
						<div className='column__line'></div>
						<div className='column__content'>
							<ul className='column__list'>
								<li className='column__openingday list__element'>Monday - 9:00AM to 6:00PM</li>
								<li className='column__openingday list__element'>Tuesday - 9:00AM to 6:00PM</li>
								<li className='column__openingday list__element'>Wednesay - 9:00AM to 6:00PM</li>
								<li className='column__openingday list__element'>Thursday - 9:00AM to 6:00PM</li>
								<li className='column__openingday list__element'>Friday - 9:00AM to 6:00PM</li>
								<li className='column__openingday list__element'>Saturday - 9:00AM to 6:00PM</li>
							</ul>
						</div>
					</div>
					<div className='footer__column column'>
						<h4 className='column__title'>CONTACT <span>HERE</span></h4>
						<div className='column__line'></div>
						<div className='column__content'>
							<div className='column__list'>
								<span className='column__address list__element'>Address: 44 New Design Street, Melbourne 005</span>
								<span className='column__number list__element'>Phone: +48 122 33 44 555</span>
								<span className='column__fax list__element'>Fax: +91 5464 213</span>
								<span className='column__email list__element'>Email: <button>info@example.com</button></span>
							</div>
							<div className='column__socials'>
								<div className='column__social'>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										viewBox="0 0 310 310" >
										<g id="XMLID_834_">
											<path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
										</g>
									</svg>
								</div>
								<div className='column__social'>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										viewBox="0 0 310 310" >
										<g id="XMLID_826_">
											<path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"/>
										</g>
									</svg>
								</div>
								<div className='column__social'>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										viewBox="0 0 315 315" >
										<g id="XMLID_510_">
											<path id="XMLID_511_" d="M307.5,136.892h-19.791V117.1c0-4.143-3.357-7.5-7.5-7.5h-26.717c-4.143,0-7.5,3.357-7.5,7.5v19.792
		h-19.791c-4.143,0-7.5,3.357-7.5,7.5v26.717c0,4.143,3.357,7.5,7.5,7.5h19.791v19.792c0,4.142,3.357,7.5,7.5,7.5h26.717
		c4.143,0,7.5-3.358,7.5-7.5v-19.792H307.5c4.143,0,7.5-3.357,7.5-7.5v-26.717C315,140.249,311.643,136.892,307.5,136.892z"/>
											<path id="XMLID_512_" d="M101.906,104.16c9.088,0,17.823,2.45,25.274,7.087l8.513,5.825c2.967,2.03,6.958,1.671,9.514-0.861
		l24.828-24.596c1.589-1.574,2.392-3.774,2.191-6.001c-0.2-2.227-1.384-4.248-3.228-5.513l-14.43-9.896
		c-0.294-0.201-0.603-0.382-0.922-0.539l-13.979-6.902c-0.185-0.092-0.374-0.176-0.566-0.252
		c-12.042-4.754-24.729-7.165-37.708-7.165c-26.757,0-51.996,10.27-71.068,28.915c-19.367,18.934-30.137,44.681-30.323,72.499
		c-0.187,27.824,10.239,53.72,29.355,72.916c18.968,19.049,45.879,29.975,73.834,29.975c27.658,0,53.608-10.739,71.195-29.463
		c13.931-14.831,22.48-34.641,24.727-57.288c0.021-0.215,0.034-0.43,0.036-0.645l0.26-20.345c0.006-0.421-0.024-0.841-0.09-1.257
		l-1.09-6.953c-0.571-3.649-3.716-6.339-7.409-6.339h-86.672c-4.143,0-7.5,3.358-7.5,7.5v29.982c0,4.142,3.357,7.5,7.5,7.5h44.186
		c-2.025,4.439-5.216,9.12-9.251,13.482c-8.801,9.518-21.926,14.977-36.01,14.977c-14.383,0-28.157-5.636-37.79-15.462
		c-20.052-20.448-19.822-56.077,0.489-76.245C75.334,109.605,88.505,104.16,101.906,104.16z"/>
										</g>
									</svg>
								</div>
								<div className='column__social'>
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										viewBox="0 0 310 310" >
										<g id="XMLID_801_">
											<path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
											<path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
											<path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='footer__policy policy'>
					<div className='policy__element'>
						<span className='policy__text'>© 2018. ALL RIGHTS RESERVED</span>
					</div>
					<div className='policy__buttons'>
						<button className='policy__button'>
							<span className='policy__text'>privacy policy</span>
						</button>
						<button className='policy__button'>
							<span className='policy__text'>terms & condition</span>
						</button>
					</div>
				</section>
			</Container>
		</footer>
	)
}

export default Footer