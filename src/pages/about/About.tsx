import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../components/avatar/Avatar'
import Container from '../../components/container/Container'
import Pathbackground from '../components/path/components/background/Pathbackground'
import Pathname from '../components/path/components/pathname/Pathname'
import Pathtrek from '../components/path/components/pathtrek/Pathtrek'
import Path from '../components/path/Path'
import Successrate from '../mainpage/components/successrate/Successrate'
import Intro from './components/intro/Intro'
import './About.scss'
import Blog from './components/blog/Blog'

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
						About
					</Pathtrek>
				</Container>
			</Path>
			<Intro />
			<Successrate />
			<Blog />
			<Avatar />
		</section>
	)
}

export default About