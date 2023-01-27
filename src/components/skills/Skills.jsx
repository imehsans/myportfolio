import React from 'react'

const Skills = () => {
	var skills = [
		{
			programming: [
				{
					img: './images/html5.png',
					title: 'HTML',
					command: '95%',
				},
				{
					img: './images/CSS3.png',
					title: 'CSS',
					command: '95%',
				},
				{
					img: './images/Bootstrap.png',
					title: 'Bootstrap',
					command: '90%',
				},
				{
					img: './images/Tailwind.png',
					title: 'TailwindCSS',
					command: '90%',
				},
				{
					img: './images/Sass.png',
					title: 'SASS',
					command: '90%',
				},
				{
					img: './images/javascript.png',
					title: 'JavaScript',
					command: '80%',
				},
				{
					img: './images/jquery.png',
					title: 'JQuery',
					command: '80%',
				},
				{
					img: './images/Ajax.png',
					title: 'AJAX',
					command: '60%',
				},
				{
					img: './images/React.png',
					title: 'ReactJs',
					command: '80%',
				},
				{
					img: './images/nextJs.png',
					title: 'NEXT.js',
					command: '80%',
				},
				{
					img: './images/redux.png',
					title: 'Redux JS',
					command: '80%',
				},
				{
					img: './images/git.png',
					title: 'GIT',
					command: '70%',
				},
				{
					img: './images/nodejs.png',
					title: 'NodeJs',
					command: '10%',
				},
				{
					img: './images/mongodb.png',
					title: 'MongoDB',
					command: '10%',
				},
				{
					img: './images/express.png',
					title: 'ExpressJs',
					command: '10%',
				},
				{
					img: './images/sql.png',
					title: 'SQL',
					command: '40%',
				},
			],
			Note: [
				{
					img: './images/skillnote.png',
					title: 'About Skills',
					details:
						'Have an Excellent command HTML, CSS, Bootstrap, Tailwind CSS to implement design, And have command on React JavaScript library using for Front end development, Basic Knowledge of MongoDB , Express and NodeJS, Have Basic command on (SQL)Structure Query Language, Firebase and Oracle database gained by working on different Projects in Bachelor Degree. Working on multiple projects in my Degree courses give me solid command to implement programming languages like C, C++, Java, and Python. Proficient command over version control system Git gained by managing projects progresses using GitHub in different projects. Excellent communication skills (written and verbal) in dealing and communicating with people gained through working with individuals from different backgrounds. Excellent Organizational and leading skills gained by working in different societies in university as a front man.',
				},
			],
		},
	]

	return (
		<div className="container px-4 pt-8 mx-auto text-center md:px-0 md:pt-16">
			<h1 className="font-anton py-2 mb-5 text-[24px] md:text-[35px] text-dark">
				Personal Skills
			</h1>
			<div>
				<h1 className="font-semibold text-[20px] md:text-[24px] text-dark hover:text-primary text-start ">
					<span className="mb-10"></span>
				</h1>
				<div className="text-start">
					{skills.map((skill) => {
						return (
							<>
								{skill?.Note.map((item) => {
									return (
										<div
											className="flex items-center justify-around px-4 py-16 mt-8 md:mt-16 md:pt-16 md:bg-gradient-to-br to-secondary rounded-2xl via-primary from-dark"
											key={item.id}
										>
											<div className="justify-center hidden w-1/2 md:flex">
												<img
													className="w-[300px] h-full shadow-2xl shadow-dark hover:scale-125 ease-in-out delay-300 rounded-b-2xl border-primary rounded-xl border-t-0 border-[20px] border-r-0 outline-1"
													src={item?.img}
													alt={item.title}
												/>
											</div>
											<div className="w-3/4 mx-auto md:w-1/2">
												<h1 className="font-anton  text-primary mb-3 text-center md:text-start  text-[24px] md:w-3/4 md:text-[30px] md:text-white">
													{item.title}
												</h1>
												<p className="w-full text-center text-dark md:w-3/4 md:text-white md:text-start">
													{item.details}
												</p>
											</div>
										</div>
									)
								})}

								<ul className="flex flex-wrap justify-start gap-2 mt-8 md:mt-16 md:gap-10 md:justify-center">
									{skill.programming.map((item) => {
										return (
											<li className="px-3 py-4 text-center transition ease-in-out delay-300 scale-95 border rounded-xl md:scale-100 hover:scale-105 md:hover:scale-125 border-secondary hover:border-primary md:rounded bg-light bg-opacity-10 hover:bg-white hover:text-dark ">
												<div className="items-center justify-center hidden w-32 h-32 overflow-hidden border rounded-full border-primary md:flex">
													<img
														className="w-20 ease-in-out delay-300 scale-100 hover:scale-105"
														src={item.img}
														alt={item.title}
													/>
												</div>
												<h1 className="font-semibold text-dark hover:text-primary md:text-secondary">
													{item.title}
												</h1>
												<p className="hidden md:block hover:block">
													Command {item.command}
												</p>
												<div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
													<div
														className="h-2 rounded-full bg-primary"
														style={{ width: item.command }}
													></div>
												</div>
											</li>
										)
									})}
								</ul>
							</>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Skills
