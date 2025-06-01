import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../../nav.links";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = ({ closeNav, bg }) => {
	return (
		<motion.div className="links" variants={variants}>
			{links.map((item, index) => (
				<motion.p
					key={index}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={closeNav}
					style={{
						color: bg && "transparent",
					}}
				>
					<Link href={item.href}> {item.name}</Link>
				</motion.p>
			))}
		</motion.div>
	);
};

export default Links;
