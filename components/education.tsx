const education = [
	{
		eduHeading: "Bachelor of Computer Science",
		desc: "Grade: 3.65 | Thesis: Biometric Key Generation: Deep Face Recognition Integrated with NTRU Encryption",
		start: "2020",
		end: "2025",
		location: "Universitas Sebelas Maret",
	},
	{
		eduHeading: "Backend Track",
		desc: "MSIB Program by Kemendikbudristek | Completed intensive backend program focused on REST APIs, database design, security, Docker deployment, and CI/CD workflows.",
		start: "08/2022",
		end: "12/2022",
		location: "Startup Campus",
	},
];

const Education = () => {
	return (
		<div>
			<h2 className="pt-5 font-bold text-4xl">Education</h2>
			{education.map((item, index) => (
				<div key={index} className="mt-6">
					{/* Education Heading */}
					<h3 className="text-2xl font-semibold">{item.eduHeading}</h3>

					{/* Location */}
					<p className="text-lg italic">{item.location}</p>

					{/* Dates */}
					<p className="text-sm text-gray-500">
						{item.start} – {item.end}
					</p>

					{/* Description */}
					<p className="mt-2">{item.desc}</p>
				</div>
			))}
		</div>
	);
};
export default Education;
