import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../components/avatar/Avatar'
import Container from '../../components/container/Container'
import Pathbackground from '../components/path/components/background/Pathbackground'
import Pathname from '../components/path/components/pathname/Pathname'
import Pathtrek from '../components/path/components/pathtrek/Pathtrek'
import Path from '../components/path/Path'
import Intro from './components/intro/Intro'

const About = () => {
	const navigate = useNavigate()
	return (
		<section className='about'>
			<Path>
				<Pathbackground>
					<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/breadctrumb-about-us.jpg" alt="" />
				</Pathbackground>
				<Container>
					<Pathname>
						About
					</Pathname>
					<Pathtrek>
						<button onClick={() => navigate('/home')}>Home</button>
						<span>/</span>
						About
					</Pathtrek>
				</Container>
			</Path>
			<Intro />
			<Avatar />
		</section>
	)
}

export default About