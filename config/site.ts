export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Abiyyu Dzaky Muhammad - Secundum Scientiam",
	description: "Software Engineer | Full-stack Developer",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Contact Me!",
			href: "/contact",
		},
	],
	// Hamburger menu when view is small
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Contact Me!",
			href: "/contact",
		},
	],
	links: {
		github: "https://github.com/NeoSwitchh",
		linkedin: "https://www.linkedin.com/in/abiyyu-dzaky-muhammad-024660209/",
	},
};
