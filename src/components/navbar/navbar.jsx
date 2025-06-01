"use client";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
//import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { links } from "./nav.links";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [nav, setNav] = useState();

	useEffect(() => {
		function changebg() {
			if (typeof window !== "undefined" && window.scrollY >= 410) {
				setNav(true);
			} else {
				setNav(false);
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", changebg);
			return () => {
				window.removeEventListener("scroll", changebg);
			};
		}
	}, []);

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

	const pathname = usePathname();
	const pathParts = pathname.split("/");
	const firstPathname = pathParts[1];

	if (!(firstPathname === "login" || firstPathname === "sign-up")) {
		return (
			<motion.nav
				style={{
					position: nav ? "fixed" : "absolute",
					backgroundColor: nav || "transparent",
				}}
				variants={{
					visible: { y: 0 },
					hidden: { y: "-100%" },
				}}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<div className="logo">
					<Link href={"/"}>
						<h6>Devops project</h6>
					</Link>
				</div>

				<div className="links">
					<ul>
						{links.map((link, index) => (
							<li key={index}>
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="for-auth">
					<div className="login-btns">
						<Link href={"/sign-up"}>
							<button className="sign-up">
								<p>Sign up</p>
							</button>
						</Link>

						<Link href={"/login"}>
							<button>
								<p>Login</p>
							</button>
						</Link>
					</div>
				</div>
			</motion.nav>
		);
	} else {
		return null;
	}
};

export default Navbar;
