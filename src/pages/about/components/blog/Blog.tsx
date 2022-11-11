import React from 'react'
import Container from '../../../../components/container/Container'
import folder from './../../../../images/folder.png'
import like from './../../../../images/love.png'
import view from './../../../../images/viewer.png'
import calendar from './../../../../images/calendar.png'
import star from './../../../../images/star.png'
import './Blog.scss'

const Blog = () => {
	return (
		<section className='blog'>
			<Container>
				<div className='blog__name name'>
					<div className='name__logo'>
						<img src='https://dthomefix.wpenginepowered.com/wp-content/uploads/2018/04/title-img.png' alt="" />
					</div>
					<h4 className='name__title'>RECENT BLOG</h4>
					<h6 className='name__subtitle'>Our News Updates</h6>
				</div>
				<span className='blog__text'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</span>
				<section className='blog__posts'>
					<div className='blog__post post'>
						<div className='post__icon star'>
							<img src={star} alt="" />
						</div>
						<div className='post__image'>
							<div className='post__shadow'></div>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2017/08/blog-img3-1-570x380.jpg" alt="" />
						</div>
						<div className='post__routes'>
							<div className='post__icon'>
								<img src={folder} alt="" />
							</div>
							<div className='post__route'>IMAGE</div>
							<div className='post__route'>PLUMBING</div>
						</div>
						<h4 className='post__name'>Camping Gears</h4>
						<h6 className='post__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</h6>
						<div className='post__button'>Read More</div>
						<div className='post__info'>
							<div className='post__date'>
								<div className='post__icon'>
									<img src={calendar} alt="" />
								</div>
								OCTOBER 1, 2018
							</div>
							<div className='post__analitics'>
								<div className='post__likes'>
									<div className='post__icon'>
										<img src={like} alt="" />
									</div>
									2
								</div>
								<div className='post__viewers'>
									<div className='post__icon'>
										<img src={view} alt="" />
									</div>
									47437
								</div>
							</div>

						</div>
					</div>
					<div className='blog__post post available'>
						<div className='post__icon star available'>
							<img src={star} alt="" />
						</div>
						<div className='post__image'>
							<div className='post__shadow'></div>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2017/08/blog-img1-1-570x380.jpg" alt="" />
						</div>
						<div className='post__routes'>
							<div className='post__icon'>
								<img src={folder} alt="" />
							</div>
							<div className='post__route'>ALL IN ALL</div>
							<div className='post__route'>PLUMBING</div>
						</div>
						<h4 className='post__name'>High Rise Buildings</h4>
						<h6 className='post__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</h6>
						<div className='post__button'>Read More</div>
						<div className='post__info'>
							<div className='post__date'>
								<div className='post__icon'>
									<img src={calendar} alt="" />
								</div>
								AUGUST 10, 2017
							</div>
							<div className='post__analitics'>
								<div className='post__likes'>
									<div className='post__icon'>
										<img src={like} alt="" />
									</div>
									0
								</div>
								<div className='post__viewers'>
									<div className='post__icon'>
										<img src={view} alt="" />
									</div>
									206
								</div>
							</div>

						</div>
					</div>
					<div className='blog__post post'>
						<div className='post__icon star'>
							<img src={star} alt="" />
						</div>
						<div className='post__image'>
							<div className='post__shadow'></div>
							<img src="https://dthomefix.wpenginepowered.com/wp-content/uploads/2017/07/blog-img6-570x380.jpg" alt="" />
						</div>
						<div className='post__routes'>
							<div className='post__icon'>
								<img src={folder} alt="" />
							</div>
							<div className='post__route'>AUDIO</div>
							<div className='post__route'>MAINTENENCE</div>
						</div>
						<h4 className='post__name'>Audio Talks On Travel</h4>
						<h6 className='post__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</h6>
						<div className='post__button'>Read More</div>
						<div className='post__info'>
							<div className='post__date'>
								<div className='post__icon'>
									<img src={calendar} alt="" />
								</div>
								JULY 31, 2017
							</div>
							<div className='post__analitics'>
								<div className='post__likes'>
									<div className='post__icon'>
										<img src={like} alt="" />
									</div>
									0
								</div>
								<div className='post__viewers'>
									<div className='post__icon'>
										<img src={view} alt="" />
									</div>
									115
								</div>
							</div>

						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}

export default Blog