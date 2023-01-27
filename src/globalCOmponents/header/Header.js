import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [tab, setTab] = useState('home')
	const handleToggle = () => {
		setToggleMenu(!toggleMenu)
	}

	var data = [
		{
			title: 'Blogs',
			tab: 'blog',
			link: '/blogs',
		},
		{
			title: 'Skills',
			tab: 'skill',
			link: '/skills',
		},
		{
			title: 'Projects',
			tab: 'project',
			link: '/projects',
		},
		{
			title: 'About me',
			tab: 'work',
			link: '/work',
		},
		{
			title: 'Contact!',
			tab: 'contact',
			link: '/contact',
		},
	]
	return (
		<header>
			<div className="px-4 py-2 font-bold text-light bg-gradient-to-tr from-primary via-dark to-secondary">
				<div className="container flex flex-wrap justify-between mx-auto">
					<Link className="order-1" to="/">
						<h1
							className="font-rubik font-light text-[40px] text-primary"
							onClick={() => setTab('home')}
						>
							JS-Dev
						</h1>
					</Link>
					<div
						className={
							toggleMenu
								? 'md:flex md:pt-0 order-3 pt-2 w-full md:w-auto'
								: 'hidden md:flex order-3'
						}
						id="menu"
					>
						<div className="justify-between md:items-center flex text-[24px] font-normal flex-col md:flex-row gap-x-8 align-center">
							{data.map((item) => {
								return (
									<Link
										className="px-4 py-2 border-b cursor-pointer md:px-0 md:py-0 md:inline-block hover:text-primary active:text-primary md:border-none"
										to={item?.link}
										onClick={() => setTab(item?.tab)}
									>
										<span className={tab === item?.tab ? 'text-primary ' : ''}>
											{item?.title}
										</span>
									</Link>
								)
							})}
						</div>
					</div>
					<div className="order-2 mt-3 cursor-pointer md:hidden">
						<input className="hidden menu-btn" type="checkbox" id="menu-btn" />
						<label
							className="relative block px-2 py-4 cursor-pointer select-none menu-icon md:hidden"
							htmlFor="menu-btn"
						>
							<span
								onClick={handleToggle}
								className="relative flex items-center text-black navIcon bg-white-darkest"
							></span>
						</label>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
