import React, { useState } from "react";

//create your first component
const Todo = () => {
	const [list, setList] = useState([]);
	const [currentTask, setCurrentTask] = useState("");

	function onkeydown(e) {
		if (e.key === "Enter") {
			addItem();
		}
	}

	function addItem() {
		const newList = [...list, currentTask];
		setList(newList);
	}

	return (
		<div className="card">
			<input
				type="text"
				placeholder="Añadir tarea"
				onChange={e => {
					setCurrentTask(e.target.value);
				}}
				onKeyDown={onkeydown}
				value={currentTask}
			/>
			{list.map((item, index) => (
				<div className="item" key={index}>
					<p>{item}</p>
				</div>
			))}
		</div>
	);
};

export default Todo;
