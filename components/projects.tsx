import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";

const projects = [
	{
		proHeading: "Minibank",
		desc: "Developed a simulated online banking system with secure login, account management, and fund transfer features. Built the backend RESTful API using Laravel 9 and implemented robust database transaction handling. Coordinated team workflow, project documentation, and GitHub project board for efficient collaboration.",
		proType: "Team Project",
		stack: ["Laravel 9", "MySQL"],
	},
	{
		proHeading: "SQL Reader",
		desc: "Created a desktop application to view, edit, and manage SQL database tables. Designed an intuitive UI supporting CRUD operations, table selection, and real-time data previews.",
		proType: "Individual Project",
		stack: ["C#", "WinForm"],
	},
	{
		proHeading: "Fashion Campus API",
		desc: "Engineered the backend system for a Startup Campus e-commerce platform. Designed and implemented RESTful APIs for authentication, product catalog, search, image retrieval, banners, categories, cart management, orders, and user profiles. Built admin dashboards with order and sales tracking endpoints, deployed via Docker, and managed dependencies with Composer.",
		proType: "Team Project",
		stack: ["Laravel", "MySQL", "Docker", "Composer", "REST API"],
	},
	{
		proHeading: "Personal Website",
		desc: "Built a responsive portfolio website to showcase projects, skills, and work experience. Implemented dynamic routing, smooth animations, and reusable components for scalability. Deployed on Vercel with CI/CD pipelines for automated builds and seamless updates.",
		proType: "Individual Project",
		stack: ["NextJS", "Vercel"],
	},
	{
		proHeading: "DeepFaceRecognitionNTRU",
		desc: "Implemented a deep learning model integrating facial recognition with cryptographic key generation. Leveraged DenseNet121 for feature extraction from the UTKFace dataset and applied outputs to generate NTRU key pairs. Explored the intersection of biometric authentication and lattice-based cryptography for enhanced security.",
		proType: "Research / Individual Project",
		stack: ["Python", "Keras", "TensorFlow", "DenseNet121", "Scikit-learn"],
	},
	{
		proHeading: "EEG Emotion Recognition",
		desc: "Developed a recurrent neural network to predict emotional states from EEG signals collected during movie-watching experiments. Preprocessed and analyzed brainwave data, performed model training with TensorFlow, and evaluated performance using classification metrics. Showcased the application of deep learning in affective computing and brain–computer interface research.",
		proType: "Research / Individual Project",
		stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
	},
	{
		proHeading: "Indonesian Song Emotion Detection",
		desc: "Designed an NLP model using IndoBERT to classify emotions in Indonesian song lyrics. Trained and evaluated the model on a crowd-labeled dataset, applying transfer learning to improve accuracy. Demonstrated the potential of transformer-based architectures for understanding cultural and linguistic nuances in music.",
		proType: "Research / Team Project",
		stack: ["Python", "IndoBERT", "TensorFlow", "Scikit-learn", "Pandas"],
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
