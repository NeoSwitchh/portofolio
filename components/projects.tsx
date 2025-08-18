import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";

const projects = [
	{
		proHeading: "Minibank",
		desc: "Built a simulated online banking system with login, account management, and transfer features. Developed the backend RESTful API with Laravel 9 and handled secure database transactions. Managed the team workflow, documentation, and GitHub project board.",
		proType: "Team Project",
		stack: ["Laravel 9", "MySQL"],
	},
	{
		proHeading: "SQL Reader",
		desc: "Developed a desktop app to view and edit structured SQL database tables. Designed simple UI for CRUD operations, table selection, and live preview.",
		proType: "Individual Project",
		stack: ["C#", "WinForm"],
	},
	{
		proHeading: "Fashion Campus API",
		desc: "Designed and implemented the backend of the Startup Campus platform using Laravel. Built a comprehensive RESTful API covering image retrieval, banners, categories, authentication (sign-up, sign-in), product catalog (search, details), cart management, user profile, orders, and admin dashboards with order and sales endpoints.",
		proType: "Team Project",
		stack: ["Laravel", "MySQL", "Docker", "Composer", "REST API"],
	},
	{
		proHeading: "Personal Website",
		desc: "Developed a responsive personal portfolio website to showcase projects, skills, and work experience. Implemented dynamic routing, smooth animations, and reusable components for maintainability. Deployed on Vercel with CI/CD integration for automated builds and updates.",
		proType: "Individual Project",
		stack: ["NextJS", "Vercel"],
	},
];

const Projects = () => {
	return (
		<div>
			<h1 className="pt-5 font-bold text-5xl text-center mb-4">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((item, index) => (
					<Card key={index} className="max-w-[400px]">
						<CardHeader className="flex justify-between">
							<div className="flex flex-col">
								<h4 className="text-xl font-semibold leading-none text-default-600">
									{item.proHeading}
								</h4>
								<p className="text-small text-default-400">{item.proType}</p>
							</div>
						</CardHeader>

						<CardBody className="px-3 py-2 text-small text-default-500">
							<p>{item.desc}</p>
						</CardBody>

						<CardFooter className="flex flex-wrap gap-2">
							{item.stack.map((tech, j) => (
								<Chip key={j} size="sm" className="bg-tangelo-500 text-white">
									{tech}
								</Chip>
							))}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Projects;
