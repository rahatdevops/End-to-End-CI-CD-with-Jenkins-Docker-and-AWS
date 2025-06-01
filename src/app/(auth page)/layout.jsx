import React from "react";
import "./auth.page.scss";
import Link from "next/link";

const AuthLayout = ({ children }) => {
	return (
		<div className="auth-page">
			<div className="auth-container">
				<div className="redirect-back">
					<div className="logo">
						<Link href={"/"}>
							<h6>DevOps</h6>
						</Link>
					</div>
				</div>

				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
