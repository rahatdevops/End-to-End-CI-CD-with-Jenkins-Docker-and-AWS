"use client";
import React from "react";
import "./back.scss";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const Back = ({ text, home }) => {
	const router = useRouter();

	return (
		<div className="back">
			<BiArrowBack
				className="ut-back-icon"
				onClick={() => router.back()}
			/>

			<p onClick={() => router.back()}>{text}</p>

			<div className="other-redirect">
				{home && (
					<Link href={"/"}>
						<p>/home</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Back;
