import React from 'react'
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaStackOverflow,
	FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
	var data = [
		{
			icon: <FaGithubSquare />,
			link: 'https://github.com/imehsans',
		},
		{
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/ehsan-ullah-57b72a156/',
		},
		{
			icon: <FaStackOverflow />,
			link: 'https://stackoverflow.com/users/9044450/ehsan-ullah',
		},
		{
			icon: <FaTwitterSquare />,
			link: 'https://twitter.com/cdehsann',
		},
		{
			icon: <FaInstagramSquare />,
			link: 'https://www.instagram.com/cdehsan',
		},
		{
			icon: <FaFacebookSquare />,
			link: 'https://www.facebook.com/imehsan.s?mibextid=ZbWKwL',
		},
	]

	return (
		<div className="py-5 border-t-2 border-dashed bg-gradient-to-tr from-primary via-dark to-secndary border-primary to-secondary bg-opacity-10">
			<ul className="flex justify-around w-11/12 mx-auto text-[40px] md:text-[50px] sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-5">
				{data?.map((item) => {
					return (
						<li
							className="p-1 duration-300 ease-in-out scale-75 border rounded border-primary  text-[#fff] hover:border-white hover:scale-100"
							key={item.id}
						>
							<a href={item?.link} className=" hover:text-primary">
								{item?.icon}
							</a>
						</li>
					)
				})}
			</ul>
			<div>
				<h2 className="text-center text-[#fff] font-lighter">
					Copyright ©2023 All rights reserved
					<i className="texgt\"> mehsanjadoon786@gmail.com</i>
				</h2>
			</div>
		</div>
	)
}

export default Footer
