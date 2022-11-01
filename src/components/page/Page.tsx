import React, { FC, useEffect } from 'react'
import './Page.scss'

interface pageProps {
	children: React.ReactNode;
}

const Page: FC<pageProps> = ({ children }) => {

	return (
		<main className='page'>
			{children}
		</main>
	)
}

export default Page