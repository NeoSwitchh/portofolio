const certification = [
	{
		certHeading: "Git Fundamentals",
		desc: "Certificate of Completion",
		location: "Progate",
	},
	{
		certHeading: "Duolingo English Test",
		desc: "Score: 140/160 – Equivalent to IELTS 7.5 (Advanced Proficiency)",
		location: "Duolingo",
	},
	{
		certHeading: "Introduction to IoT",
		desc: "Completed Cisco’s foundational IoT course covering device connectivity, networking, and security basics.",
		location: "Cisco",
	},
];

const Certification = () => {
	return (
		<div>
			<h2 className="pt-5 font-bold text-4xl">Certifications</h2>
			{certification.map((item, index) => (
				<div key={index} className="mt-6">
					{/* Certificate Heading */}
					<h3 className="text-2xl font-semibold">{item.certHeading}</h3>

					{/* Location / Issuer */}
					<p className="text-lg italic">{item.location}</p>

					{/* Description */}
					<p className="mt-2">{item.desc}</p>
				</div>
			))}
		</div>
	);
};
export default Certification;
