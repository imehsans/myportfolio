import React from 'react'

const Projects = () => {
	var Projects = [
		{
			name: 'Portfolio Site',
			img3: '',
			link: 'https://my-portfolio-frontend.netlify.app/',
			developedIn: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'ReactJs'],
			detail:
				'It was developed for a company as ReactJs developer Task, Its fully Responsive for each screen and according to the given design',
		},
		{
			name: 'Quiz Maker App',
			img3: '',
			link: 'https://react-json-quizmaker.netlify.app/',
			developedIn: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'ReactJs'],
			detail:
				'It was developed for a company as ReactJs developer Task, Its fully Responsive for each screen and according to the given design',
		},
		{
			name: 'SafetyConnect',
			img3: '',
			link: 'https://inspectionweb-react-ehsan.netlify.app/',
			developedIn: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'ReactJs'],
			detail:
				'It was developed for a company as ReactJs developer Task, Its fully Responsive for each screen and according to the given design',
		},
		{
			name: 'Cable-Co Dashboard',
			img3: '',
			link: 'https://cableco-dashboard-by-ehsan.netlify.app/',
			developedIn: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery'],
			detail:
				'Its develop for practice purpose site from design with fully Responsive for each screen and according to the given design every function worked according the demo site',
		},
		{
			name: 'SSL-Checker ToolKit',
			img3: '',
			link: 'https://toolkit-tailwind-by-ehsan.netlify.app/src/',
			developedIn: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
			detail:
				'This site is developed for the purpose of practice on TailwindCSS and JavaScript from demo site with fully Responsive for each screen',
		},
		{
			name: 'SCTE Site',
			img3: '',
			link: 'https://scte-site-by-ehsan.netlify.app/',
			developedIn: ['HTML', 'CSS', 'Bootstrap'],
			detail:
				'This site is developed for the purpose of practice on Bootstrap from demo site with fully Responsive for each screen',
		},
		{
			name: 'Apeam Site',
			img3: '',
			link: 'https://apem-site-by-ehsanullah.netlify.app/',
			developedIn: ['HTML', 'CSS'],
			detail:
				'First practice site from design with fully Responsive for each screen',
		},
	]

	return (
		<div className="container pt-8 mx-auto mb-8">
			<h1 className="font-anton text-center py-4 text-[24px] md:text-[30px] text-primary">
				Projects
			</h1>
			<ul className="flex flex-wrap p-8 overflow-hidden gap-y-4">
				{Projects?.map((project) => {
					return (
						<div className="w-full mx-auto scale-90 md:mx-0 md:w-1/2 lg:w-1/3 h-96 rounded-2xl bg-primary">
							<li
								className="w-full h-full px-3 py-4 duration-300 ease-in-out scale-105 shadow-2xl cursor-pointer md:mt-3 md:ml-3 lg:mt-5 lg:ml-5 ms-4 hover:bg-opacity-20 hover:scale-100 bg-dark hover:bg-gradient-to-br hover cursor pointer hover:from-secondary hover:to-primary rounded-2xl"
								key={project.key}
							>
								<a
									href={project.link}
									target="_blank"
									className="flex flex-col items-center justify-center w-full h-full opacity-20 hover:opacity-100 "
									rel="noreferrer"
								>
									<h1 className="text-[35px] opacity-100 font-anton text-white">
										{project?.name}
									</h1>
									<p className="w-3/4 my-3 text-center text-white">
										{project.detail}
									</p>
									<ul class="flex gap-4 flex-wrap justify-center">
										{project.developedIn.map((item) => {
											return (
												<li className="px-2 py-1 text-white bg-transparent border border-white rounded cursor-pointer hover:bg-primary hover:border-primary">
													<span>{item}</span>
												</li>
											)
										})}
									</ul>
								</a>
							</li>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects
