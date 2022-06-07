import React from "react"

type EmployeesSearchProps = {
	onFindEmployees: (string: string) => void
}

export const EmployeesSearch: React.FC<EmployeesSearchProps> = ({ onFindEmployees }) => {
	return (
		<input
			onChange={(e) => onFindEmployees(e.target.value)}
			type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
		/>
	)
}
