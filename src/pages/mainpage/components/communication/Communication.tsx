import React, { useState } from 'react'
import Container from '../../../../components/container/Container'
import Book from './components/book/Book'
import Estimate from './components/estimate/Estimate'
import './Communication.scss'

const Communication = () => {

	const [elementAvailable, setElementEvailable] = useState(1)
	const [elementVisible, setElementVisible] = useState(1)
	return (
		<section className='communication'>
			<Container>
				<section className='communication__buttons'>
					<button className={['communication__button', 'button', elementAvailable === 1 ? 'available' : ''].join(' ')} onClick={() => {
						setElementEvailable(1)
						setTimeout(() => {
							setElementVisible(1)
						}, 0)
					}}>
						<span className='button__name'>
							Book Online
						</span>
					</button>
					<button className={['communication__button', 'button', elementAvailable === 2 ? 'available' : ''].join(' ')} onClick={() => {
						setElementEvailable(2)
						setTimeout(() => {
							setElementVisible(2)
						}, 0)
					}}>
						<span className='button__name'>
							Get An Estimate
						</span>
					</button>
				</section>
				<section className='communication__content'>
					<Book elementAvailable={elementAvailable} elementVisible={elementVisible} />
					<Estimate elementAvailable={elementAvailable} elementVisible={elementVisible} />
				</section>
			</Container>
		</section>
	)
}

export default Communication