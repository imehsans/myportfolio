import React from 'react'
import AboutMe from './AboutMe'
import EducationAndTraning from './EducationAndTraining'
import WorkExp from './workExp'
const Work = () => {
	return (
		<div className="container-flued bg-light bg-opacity-10 text-dark md:px-0">
			<AboutMe />
			<div className="container px-1 py-4 mx-auto text-center md:px-0">
				<WorkExp />
				<EducationAndTraning />
			</div>
		</div>
	)
}

export default Work
