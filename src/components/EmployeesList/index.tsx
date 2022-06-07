import React from "react"

import { EmployeesListItem } from "../"

import styles from "./EmployeesList.module.scss"

type EmployeesListProps = {
	data:
		| {
				id: number
				name: string
				salary: string
				like: boolean
				increase: boolean
		  }[]
		| []
	onDeleteEmployees: (id: number) => void
	onLikeEmployees: (id: number) => void
	onIncreaseEmployees: (id: number) => void
}

export const EmployeesList: React.FC<EmployeesListProps> = ({
	data,
	onDeleteEmployees,
	onLikeEmployees,
	onIncreaseEmployees,
}) => {
	if (data.length < 1) {
		return <div style={{ marginTop: "30px", fontSize: "20px" }}>Сотрудники отсутствуют</div>
	}

	return (
		<ul className={`${styles.employeesListItem} list-group`}>
			{data.map((employees) => {
				return (
					<EmployeesListItem
						key={employees.id}
						id={employees.id}
						name={employees.name}
						salary={employees.salary}
						like={employees.like}
						increase={employees.increase}
						onDeleteEmployees={onDeleteEmployees}
						onLikeEmployees={onLikeEmployees}
						onIncreaseEmployees={onIncreaseEmployees}
					/>
				)
			})}
		</ul>
	)
}
