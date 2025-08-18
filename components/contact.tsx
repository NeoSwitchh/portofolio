import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Mail } from "lucide-react";

const Contact = () => {
	return (
		<section className="flex flex-col items-center py-12 px-6">
			<h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

			<Card className="max-w-[500px] w-full shadow-lg">
				<CardHeader>
					<h3 className="text-2xl font-semibold">Contact Me</h3>
				</CardHeader>
				<CardBody className="flex flex-col gap-6 text-default-600">
					<p>
						I’d love to hear from you! The best way to reach me is through
						email. If you’re looking for someone to collaborate with, here are
						some of the roles I can help with:
					</p>

					<div className="flex flex-wrap gap-2">
						<Chip color="primary" variant="flat">
							Full-Stack Developer
						</Chip>
						<Chip color="secondary" variant="flat">
							Backend Engineer
						</Chip>
						<Chip color="success" variant="flat">
							Frontend Specialist
						</Chip>
						<Chip color="warning" variant="flat">
							AI/ML Developer
						</Chip>
						<Chip color="danger" variant="flat">
							Data Engineer
						</Chip>
						<Chip color="default" variant="flat">
							Data Analyst
						</Chip>
						<Chip color="primary" variant="flat">
							IoT Developer
						</Chip>
					</div>

					<div className="flex items-center gap-4">
						<Mail className="w-6 h-6 text-tangelo-500" />
						<a
							href="mailto:abiyyudm1@gmail.com"
							className="text-lg font-medium text-tangelo-600 hover:underline"
						>
							abiyyudm1@gmail.com
						</a>
					</div>
				</CardBody>
			</Card>
		</section>
	);
};

export default Contact;
