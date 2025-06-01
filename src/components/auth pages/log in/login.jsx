"use client";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";
//import { AuthLogIn, GoogleLogin } from "@/lib/actions/auth/login";
import { useRouter } from "next/navigation";

const Login = () => {
	const [error, setError] = useState();
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

		//send data to backend here
		/* AuthLogIn(data).then((data) => {
			setError(data.error);
			setSubmiting(false);
		}); */

		router.push("/");
	};

	return (
		<div className="auth">
			<div className="auth-title">
				<h3>Welcome Back!</h3>
				<h1>Log in</h1>
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
							id={"auth-email"}
						/>
					</div>
					<div className="auth-form">
						<h6>Password</h6>
						<Inputs2
							error={errors.password?.message}
							type={"password"}
							register={register}
							name={"password"}
							label={"Password"}
							id={"auth-pass"}
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
					{submiting ? <p>submiting...</p> : <p>Login</p>}
				</button>
			</form>
			<div className="or-container">
				<p>OR</p>
			</div>

			<form /* action={GoogleLogin} */>
				<button className="google-btn">
					<FcGoogle className="google-icon" />
					<p> Continue with Google</p>
				</button>
			</form>

			<div className="redirect-container">
				<p>
					Dont have an account yet?{" "}
					<Link href={"/sign-up"}>
						<span> Sign up</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
