import React from "react";
import "./split.layout.scss";

const SplitLayout = ({ children, flexReverse, height }) => {
	return (
		<div
			className="split-layout"
			style={{
				flexDirection: flexReverse && "row-reverse",
				height: height ? height : "",
			}}
		>
			{children}
		</div>
	);
};

export default SplitLayout;
