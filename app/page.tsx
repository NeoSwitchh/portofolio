"use client";
import { Image } from "@heroui/image";
import { Typewriter } from "react-simple-typewriter";
import Techstack from "@/components/techstack";
import Workexp from "@/components/workexp";
import About from "@/components/about";
import Education from "@/components/education";

export default function HomePage() {
	return (
		<section className="flex flex-col gap-4 py-8 md:py-10">
			<div className="grid grid-cols-3 w-full text-start justify-center">
				<div className="place-content-center col-span-3 md:col-span-2">
					<div className="block md:hidden justify-items-center">
						<Image
							removeWrapper
							isBlurred
							alt="HeroUI Album Cover"
							className="m-5"
							src="/meButInACircle.png"
							width={300}
						/>
					</div>
					<h1 className="font-bold text-8xl">Hi!👋</h1>
					<p className="text-4xl">I'm Abiyyu Dzaky Muhammad</p>
					<p className="text-xl">
						A full-stack developer passionate about building systems that{" "}
						<span className="w-full">
							<Typewriter
								words={[" are secure.", " are optimized.", " matter."]}
								loop={5}
								cursor
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</p>
				</div>
				<div className="hidden md:block">
					<Image
						isBlurred
						alt="HeroUI Album Cover"
						className="m-5"
						src="/meButInACircle.png"
						width={300}
					/>
				</div>
			</div>
			<About />
			<Techstack />
			<Workexp />
			<Education />
		</section>
	);
}
