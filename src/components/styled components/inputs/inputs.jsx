"use client";
import { useEffect, useRef, useState } from "react";
import "./inputs.scss";

const Inputs2 = ({
	id,
	disabled,
	error,
	type,
	label,
	node,
	softBg,
	bg,
	borderRadius,
	register,
	name,
}) => {
	return (
		<div
			className={softBg ? "inputs softbg" : "inputs"}
			style={{ height: node && "27px" }}
		>
			<input
				id={id}
				disabled={disabled}
				placeholder=" "
				{...register(name)}
				type={type}
				className="input-field"
				style={{
					borderColor: error && "rgba(255, 0, 0, 0.45)",
					fontSize: node && "12px",
					backgroundColor: bg ? bg : "",
					borderRadius: borderRadius ? "5px" : "",
				}}
			/>
			<label
				className={disabled && "label-disabled"}
				style={{ backgroundColor: bg ? bg : "" }}
			>
				<p
					style={{
						color: error && "rgba(255, 0, 0, 0.98)",
						fontSize: node && "12px",
					}}
				>
					{label}
				</p>
			</label>
			{error && <p className="input-error">{error}</p>}
		</div>
	);
};

const TextArea2 = ({
	id,
	label,
	disabled,
	inputHeight,

	node,
	error,
	bg,
	borderRadius,
	name,
	register,
}) => {
	return (
		<div className="inputs-ta">
			<textarea
				placeholder={label}
				id={id}
				disabled={disabled}
				{...register(name)}
				style={{
					height: inputHeight ? inputHeight : "100px",
					borderColor: error && "rgba(255, 0, 0, 0.45)",
					backgroundColor: bg ? bg : "",
					borderRadius: borderRadius ? "5px" : "",
				}}
				type="text area"
				className={node && "node-ta"}
			/>
		</div>
	);
};

const InputPlain = ({
	id,
	disabled,
	error,
	type,
	label,
	node,
	softBg,
	bg,
	borderRadius,
	value,
	onValueChange,
}) => {
	return (
		<div
			className={softBg ? "inputs softbg" : "inputs"}
			style={{ height: node && "27px" }}
		>
			<input
				id={id}
				disabled={disabled}
				placeholder=" "
				value={value}
				onChange={(e) => {
					onValueChange(e.target.value);
				}}
				type={type}
				className="input-field"
				style={{
					borderColor: error && "rgba(255, 0, 0, 0.45)",
					fontSize: node && "12px",
					backgroundColor: bg ? bg : "",
					borderRadius: borderRadius ? "5px" : "",
				}}
			/>
			<label
				className={disabled && "label-disabled"}
				style={{ backgroundColor: bg ? bg : "" }}
			>
				<p
					style={{
						color: error && "rgba(255, 0, 0, 0.98)",
						fontSize: node && "12px",
					}}
				>
					{label}
				</p>
			</label>
			{error && <p className="input-error">{error}</p>}
		</div>
	);
};

export { Inputs2, TextArea2, InputPlain };
