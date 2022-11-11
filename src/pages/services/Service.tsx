import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../components/avatar/Avatar'
import Container from '../../components/container/Container'
import Pathbackground from '../components/path/components/background/Pathbackground'
import Pathname from '../components/path/components/pathname/Pathname'
import Pathtrek from '../components/path/components/pathtrek/Pathtrek'
import Path from '../components/path/Path'
import Successrate from '../mainpage/components/successrate/Successrate'

const Service
	= () => {
		const navigate = useNavigate()
		return (
			<section className='service'>
				<Path>
					<Pathbackground>
						<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/05/breadctrumb-services.jpg" alt="" />
					</Pathbackground>
					<Container>
						<Pathname>
							Services
						</Pathname>
						<Pathtrek>
							<button onClick={() => navigate('/home')}>Home</button>
							<span>/</span>
							Services
						</Pathtrek>
					</Container>
				</Path >
				<Successrate />
				<Avatar />
			</section>
		)
	}

export default Service
