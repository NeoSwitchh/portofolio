"use client";
import { Image } from "@heroui/image";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
	return (
		<section className="flex flex-col items-start justify-start gap-4 py-8 md:py-10">
			<div className="grid grid-cols-2 w-full text-start justify-center">
				<div className="items-center justify-self-start">
					<h1 className="text-9xl">Hi!👋</h1>
					<p className="text-4xl">I'm Abiyyu Dzaky Muhammad</p>
					<p className="text-xl">
						Your backend developer who is passionate in building systems that{" "}
						<span className="w-full">
							<Typewriter
								words={[" is secure.", " is optimized.", " matter."]}
								loop={5}
								cursor
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</p>
				</div>
				<div className="justify-self-end">
					<Image
						isBlurred
						alt="HeroUI Album Cover"
						className="m-5"
						src="/meButInACircle.png"
						width={300}
					/>
				</div>
			</div>
			<div>
				<h2>About</h2>
				<p>
					With hands-on experience developing scalable Laravel-based web
					applications and secure REST APIs, I've built backend solutions for
					educational institutions — from localized content management to admin
					dashboards that empower users. I specialize in SQL-driven data
					structures, robust user authentication, and clean, maintainable code
					under version control with Git. <br />
					Beyond the code, I care deeply about secure system architecture,
					performance, and continuous improvement. I'm always eager to learn,
					grow, and tackle new challenges.
				</p>
			</div>
		</section>
	);
}
