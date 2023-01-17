import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className="flex justify-center items-center min-h-screen bg-amber-50">
			<button
				className="h-8 w-8 bg-red-500 rounded text-center shadow-lg border"
				type="button"
				onClick={() => setCount((c) => (c > 0 ? c - 1 : 0))}
			>
				-
			</button>
			<div className="h-8 w-8 mx-2 flex justify-center items-center">
				<span className="text-xl font-light">{count}</span>
			</div>
			<button
				className="h-8 w-8 bg-green-500 rounded text-center shadow-lg border"
				type="button"
				onClick={() => setCount((c) => c + 1)}
			>
				+
			</button>
		</main>
	);
}

export default App;
