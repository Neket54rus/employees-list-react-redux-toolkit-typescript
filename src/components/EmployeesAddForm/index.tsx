import React from "react"

import "./EmployeesAddForm.scss"

type EmployeesAddForm = {
	onAddNewEmployees: (name: string, salary: string) => void
}

export const EmployeesAddForm: React.FC<EmployeesAddForm> = ({
	onAddNewEmployees,
}) => {
	const [name, setName] = React.useState<string>("")
	const [salary, setSalary] = React.useState<string>("")

	const onSubmitForm = (e: any) => {
		e.preventDefault()
		onAddNewEmployees(name, salary)
		setName("")
		setSalary("")
	}

	return (
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form onSubmit={onSubmitForm} className="add-form d-flex">
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					className="form-control new-post-label"
					placeholder="Как его зовут?"
					value={name}
				/>
				<input
					onChange={(e) => setSalary(e.target.value)}
					type="number"
					className="form-control new-post-label"
					placeholder="З/П в $?"
					value={salary}
				/>

				<button
					disabled={name.length < 1}
					type="submit"
					className="btn btn-outline-light"
				>
					Добавить
				</button>
			</form>
		</div>
	)
}
