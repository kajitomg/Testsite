import React, { FC, useEffect, useRef, useState } from 'react'
import Communication from './components/communication/Communication'
import Contactus from './components/contactus/Contactus'
import Partners from './components/partners/Partners'
import Pricing from './components/pricing/Pricing'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Slider from './components/slider/Slider'
import Successrate from './components/successrate/Successrate'
import Testimonials from './components/testimonials/Testimonials'
import Workstatus from './components/workstatus/Workstatus'

interface MainpageProps {

}

const Mainpage: FC<MainpageProps> = ({ }) => {

	const mainpage = useRef<null | any>(null)
	const [scroll, setScroll] = useState<number>(0)

	const handleScroll = () => {
		setScroll(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleScroll);
		return () => window.removeEventListener("resize", handleScroll);
	}, []);

	useEffect(() => {
		setScroll(window.scrollY + 1);
	}, [mainpage?.current])

	return (
		<section ref={mainpage} className='mainpage'>
			<Slider header={mainpage?.current?.parentElement?.previousElementSibling?.offsetHeight} />
			<Contactus />
			<Services />
			<Successrate />
			<Communication />
			<Testimonials />
			<Workstatus />
			<Pricing />
			<Projects />
			<Partners />
		</section>
	)
}

export default Mainpage