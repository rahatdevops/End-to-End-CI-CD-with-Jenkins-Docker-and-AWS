import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Image from "next/image";
import React from "react";
import "./double.split.scss";

const DoubleSPlit = ({ image, content, flexReverse, contain, fill }) => {
	return (
		<div className="double-split">
			<SplitLayout flexReverse={flexReverse}>
				<div
					className="split-left"
					style={{ justifyContent: flexReverse && "flex-start" }}
				>
					<div
						className="double-split-image-container"
						style={{
							width: fill ? "100%" : "",
							height: fill ? "100%" : "",
						}}
					>
						<Image
							style={{ objectFit: contain && "contain" }}
							alt="product image"
							src={image}
							fill={true}
							className="double-split-image"
							quality={100}
						/>
					</div>
				</div>
				<div
					className="split-right"
					style={{ justifyContent: flexReverse && "flex-end" }}
				>
					<div className="double-split-text-container">{content}</div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default DoubleSPlit;
