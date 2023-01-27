import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

const Contact = () => {
	const contactData = [
		{
			topTitle: 'Hire Me for Your Next Amazing Project!',
			details: {
				title: 'Get in touch',
				text1:
					'The first objective will be to understand your needs, Then together develop a plan for your backyard and provide you with pricing with new pool!',
				text2:
					'Let’s talk about your website or Project. Send me a message and we will be in touch with in one business day.',
				location: {
					icon: <FaLocationArrow />,
					text: 'Rawalpindi/Islamabad',
				},
				phone: {
					icon: <FaPhone />,
					text: '+92 349 9854045',
				},
				email: {
					icon: <FaEnvelope />,
					text: 'mehsanjadoon786@gmail.com',
				},
				available: {
					dayFrom: 'Monday',
					dayTo: 'Friday',
					timeFrom: '8:00AM',
					timeTo: '10:00PM',
				},
			},
		},
	]

	return (
		<div className="container px-4 py-8 mx-auto md:py-16 text-dark md:px-0">
			{contactData.map((item) => {
				return (
					<>
						<div className="text-center">
							<h1 className="font-anton py-4 text-[24px] md:text-[30px] text-dark">
								{item.topTitle}
							</h1>
						</div>
						<div className="flex flex-col justify-around gap-y-4 gap-x-4 md:flex-row">
							{item.details ? (
								<div className="flex flex-col justify-around w-full text-center gap-y-6 md:text-start md:w-1/3">
									<div className="text-justify sm:text-start">
										<h1 className="text-[30px] text-primary font-semibold">
											{item.details.title}
										</h1>
										<p>{item.details.text1}</p>
										<p>{item.details.text2}</p>
									</div>
									<div className="flex flex-col gap-y-3">
										<div className="flex items-center gap-x-4">
											<span className="text-[20px] text-primary">
												{item.details.location.icon}
											</span>
											<span>{item.details.location.text}</span>
										</div>
										<div className="flex items-center gap-x-4">
											<span className="text-[20px] text-primary">
												{item.details.phone.icon}
											</span>
											<span>{item.details.phone.text}</span>
										</div>
										<div className="flex items-center gap-x-4">
											<span className="text-[20px] text-primary">
												{item.details.email.icon}
											</span>
											<span>{item.details.email.text}</span>
										</div>
									</div>
									{item?.details?.available ? (
										<div className="flex gap-x-4 text-[18px] underline font-semibold italic">
											<span>
												<span>{item.details?.available?.dayFrom}</span> -{' '}
												<span>{item?.details?.available?.dayTo}</span>{' '}
											</span>{' '}
											<span>
												{' '}
												<span>{item?.details?.available?.timeFrom}</span> -{' '}
												<span>{item?.details?.available?.timeTo}</span>{' '}
											</span>
										</div>
									) : (
										''
									)}
								</div>
							) : (
								''
							)}
							<div className="w-full pb-6 mx-auto md:w-2/4 md:mx-0 sm:w-10/12 lg:w-1/3 rounded-xl bg-dark">
								<div className="px-4 text-center md:px-6 lg:px-8">
									<h1 className="font-anton py-4 text-[24px] md:text-[30px] text-primary">
										I'm Ready to talk...
									</h1>
								</div>
								<hr className="border-light" />
								<div className="px-4 pt-6 md:px-6 lg:px-8">
									<form action="">
										<input
											className="w-full px-2 py-2 pt-3 mb-2 border-b-2 outline-none text-light bg-dark border-light "
											type="text"
											name="name"
											placeholder="Full Name"
											id=""
										/>
										<input
											className="w-full px-2 py-2 pt-3 mb-2 border-b-2 outline-none text-light bg-dark border-light "
											type="email"
											name="email"
											placeholder="E-Mail"
											id=""
										/>
										<input
											className="w-full px-2 py-2 pt-3 border-b-2 outline-none text-light bg-dark border-light "
											type="number"
											name="number"
											placeholder="Contact Number"
											id=""
										/>
										<textarea
											className="w-full px-2 py-2 pt-3 my-8 border outline-none resize-none rounded-xl text-light bg-dark border-light"
											name="Message"
											placeholder="Message"
											id=""
											rows="3"
										></textarea>
										<input
											className="float-right px-6 py-2 text-[18px] mb-2 font-normal text-white rounded bg-primary hover:bg-secondary"
											type="submit"
											value="Submit"
										/>
									</form>
								</div>
							</div>
						</div>
					</>
				)
			})}
		</div>
	)
}

export default Contact
