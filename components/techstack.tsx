import { Chip } from "@heroui/chip";
const techStack = [
	{
		heading: "Languages",
		items: ["Python", "PHP", "JavaScript", "TypeScript", "C/C++", "C#"],
	},
	{
		heading: "Frameworks/Libraries",
		items: [
			"Laravel",
			"Flask",
			"Flutter",
			"ReactJS",
			"NextJS",
			".NET WinForm",
			"Express.js",
			"NodeJS",
		],
	},
	{
		heading: "Databases",
		items: ["MySQL/MariaDB", "PostgreSQL", "MSSQL/SSMS", "MongoDB"],
	},
	{
		heading: "Web Tools",
		items: ["Wordpress", "Tailwind CSS", "BootstrapCSS", "Sass/SCSS", "JWT"],
	},
	{
		heading: "Other",
		items: ["Git", "Docker", "Vercel", "Postman", "Figma", "Blynk"],
	},
	{
		heading: "AI/ML",
		items: ["Keras", "TensorFlow", "scikit-learn", "Pandas"],
	},
];

const Techstack = () => {
	return (
		<div>
			<h2 className="pt-5 font-bold text-4xl">Tech Stack</h2>
			{techStack.map((item1, index1) => (
				<div key={index1} className="mt-4">
					<h3 className="text-2xl font-semibold">{item1.heading}</h3>
					<div className="flex flex-wrap">
						{item1.items.map((item2, index2) => (
							<Chip
								className="m-2 bg-tangelo-500 text-white"
								size="lg"
								key={index2}
							>
								{item2}
							</Chip>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default Techstack;
