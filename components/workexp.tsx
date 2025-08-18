import { Chip } from "@heroui/chip";
const workExp = [
	{
		jobHeading: "Fullstack Web Developer",
		jobType: "Contract",
		desc: [
			"Developed and maintained accreditation portal using Laravel and MySQL for higher education institutions.",
			"Implemented role-based login system and content management tools for internal staff.",
		],
		start: "03/2024",
		end: "09/2024",
		location: "Lembaga Akreditasi Mandiri Perguruan Tinggi Ilmu Pertanian",
		stack: ["Laravel", "MySQL", "Postman", "BootstrapCSS"],
	},
	{
		jobHeading: "Wordpress Developer",
		jobType: "Contract",
		desc: [
			"Developed dynamic and visually engaging profile websites for multiple academic departments using WordPress, improving online presence and accessibility.",
			"Enhanced website security and performance through custom configurations and the strategic use of security plugins, ensuring a zero-intrusion record during deployment.",
		],
		start: "03/2024",
		end: "06/2024",
		location: "FP Universitas Sebelas Maret",
		stack: ["WordPress", "Security Plugins"],
	},
	{
		jobHeading: "Fullstack Web Developer",
		jobType: "Contract",
		desc: [
			"Built and deployed multilingual web content for https://risnov.uns.ac.id using Laravel 8.",
			"Engineered data interface module for RIDA project, handling dynamic content rendering and filtering.",
			"Ensured accessibility compliance and responsive layout across browsers.",
		],
		start: "07/2022",
		end: "06/2023",
		location: "BBRPM Universitas Sebelas Maret",
		stack: ["Laravel", "MySQL", "Postman"],
	},
];

const Workexp = () => {
	return (
		<div>
			<h2 className="pt-5 font-bold text-4xl">Work Experience</h2>
			{workExp.map((item, index) => (
				<div key={index} className="mt-6">
					{/* Job Title + Job Type */}
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						<h3 className="text-2xl font-semibold">{item.jobHeading}</h3>
						<span className="text-sm text-gray-600">{item.jobType}</span>
					</div>

					{/* Location */}
					<p className="text-lg italic">{item.location}</p>

					{/* Dates */}
					<p className="text-sm text-gray-500">
						{item.start} – {item.end}
					</p>

					{/* Description */}
					<ul className="list-disc ml-6 mt-2">
						{item.desc.map((d, i) => (
							<li key={i}>{d}</li>
						))}
					</ul>

					{/* Tech Stack */}
					<div className="flex flex-wrap mt-2">
						{item.stack.map((tech, j) => (
							<Chip className="m-2 bg-tangelo-500 text-white" size="lg" key={j}>
								{tech}
							</Chip>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default Workexp;
