import React from 'react'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import AboutMe from '../work/AboutMe'
import Introduction from './introduction.jsx/Introduction'
const Home = () => {
	return (
		<div>
			<Introduction />
			<Skills />
			<Projects />
			<AboutMe />
			<Contact />
		</div>
	)
}

export default Home
