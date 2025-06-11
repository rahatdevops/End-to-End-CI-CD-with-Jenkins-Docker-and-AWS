document.querySelector("h1").addEventListener("click", () => {
	const greetings = [
		"Welcome to the DevOps end to end project!",
		"Automate everything with jenkins🚀",
		"CI/CD makes life easier!",
		"Docker + Jenkins = ❤️",
		"Enjoy your DevOps journey!",
		"Keep Learning Devops :)",
	];
	const h1 = document.querySelector("h1");
	const randomGreeting =
		greetings[Math.floor(Math.random() * greetings.length)];
	h1.textContent = randomGreeting;
});
