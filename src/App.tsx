import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Avatar from './components/avatar/Avatar'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Page from './components/page/Page'
import Pagecontent from './components/pagecontent/Pagecontent'
import About from './pages/about/About'
import Mainpage from './pages/mainpage/Mainpage'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Page>
					<Header />
					<Pagecontent>
						<Routes>
							<Route path='*' element={<Mainpage />} />
							<Route path='/home' element={<Mainpage />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</Pagecontent>
					<Avatar />
					<Footer />
				</Page>
			</BrowserRouter>
		</>
	)
}

export default App