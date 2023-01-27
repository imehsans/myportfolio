import React from 'react'

const AboutMe = () => {
	const About = [
		{
			title: 'About Me',
			details:
				"Front-End developer with proven experience at TODD's Group, Geeks Hub and Merik Solutions in helping companies create and maintain a better code base for reusability. Capable of continuous learning from senior Developers while still nurturing junior developers. Experience in driving projects forward as the development team lead, facilitating projects from concept launch. Passionate about learning and development with a desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to minimize user efficiency.",
			src: './images/aboutme.png',
		},
	]

	return (
		<>
			{About.map((item) => {
				return (
					<div className="flex items-center justify-around px-4 pt-8 md:pt-16 md:bg-gradient-to-bl from-light via-primary to-secondary">
						<div className="w-3/4 mx-auto md:w-1/2">
							<h1 className="font-anton md:float-right text-primary mb-3 text-center md:text-end pt-4 text-[24px] md:w-3/4 md:text-[30px] md:text-dark">
								{item.title}
							</h1>
							<p className="w-full text-center md:float-right md:pb-8 lg:mb-12 xl:mb-16 md:w-3/4 text-dark md:text-end">
								{item.details}
							</p>
						</div>
						<div className="justify-center hidden w-1/2 md:flex">
							<img className="w-[300px] h-full" src={item.src} alt="" />
						</div>
					</div>
				)
			})}
		</>
	)
}

export default AboutMe
