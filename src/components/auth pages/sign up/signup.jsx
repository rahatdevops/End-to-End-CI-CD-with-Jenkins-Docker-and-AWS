"use client";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";
import { useForm } from "react-hook-form";
//import { AuthSignUp } from "@/lib/actions/auth/signup";
//import { GoogleLogin } from "@/lib/actions/auth/login";

import { useRouter } from "next/navigation";

const Signup = () => {
	const [error, setError] = useState("");
	const [submiting, setSubmiting] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(AuthSchema),
	});

	const router = useRouter();

	const onSubmit = (data) => {
		setError("");
		setSubmiting(true);
		//server action
		/* AuthSignUp(data).then((data) => {
			setError(data.error);
			setSubmiting(false);
		}) */

		router.push("/");
	};
	return (
		<div className="auth">
			<div className="auth-title">
				<h3>Creat an account</h3>
				<h1>Sign up</h1>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="auth-form-container">
					<div className="auth-form">
						<h6>Email</h6>
						<Inputs2
							error={errors.email?.message}
							register={register}
							name={"email"}
							type={"text"}
							label={"Email"}
							id={"sauth-email"}
						/>
					</div>
					<div className="auth-form">
						<h6>Password</h6>
						<Inputs2
							error={errors.password?.message}
							name={"password"}
							register={register}
							type={"password"}
							label={"Password"}
							id={"sauth-pass"}
						/>

						{/* <p className="forgot-pass">Forgot your password?</p> */}
					</div>
				</div>

				{error !== "" && (
					<p
						style={{
							color: "rgba(255, 0, 0, 0.98)",
							fontSize: "18px",
							textAlign: "center",
						}}
					>
						{error}
					</p>
				)}

				<button className="direct-btn" disabled={submiting}>
					{submiting ? <p>submiting...</p> : <p>Sign up</p>}
				</button>
			</form>
			<div className="or-container">
				<p>OR</p>
			</div>

			<form /* action={GoogleLogin} */>
				<button className="google-btn">
					<FcGoogle className="google-icon" />
					<p> Sign up with Google</p>
				</button>
			</form>

			<div className="redirect-container">
				<p>
					Already have an account?{" "}
					<Link href={"/login"}>
						<span> Log in</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
