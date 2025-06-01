"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import "./toggleButton.scss";

const ToggleButton = ({ setOpen }) => {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<button
			onClick={() => setOpen((prev) => !prev)}
			className={hidden ? "closed-btn" : "open-btn"}
		>
			<svg width="28" height="23" viewBox="0 0 23 23">
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap=""
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap=""
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap=""
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
				/>
			</svg>
		</button>
	);
};

export default ToggleButton;
