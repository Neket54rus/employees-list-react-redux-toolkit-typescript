import React from "react"

import { EmployeesSearch, EmployeesFilterTabs } from "../"

import styles from "./EmployeesFilter.module.scss"

type EmployeesFilterProps = {
	onFindEmployees: (string: string) => void
	onFilterEmployees: (filterType: string) => void
}

export const EmployeesFilter: React.FC<EmployeesFilterProps> = ({
	onFindEmployees,
	onFilterEmployees,
}) => {
	return (
		<div className={styles.employeesFilter}>
			<EmployeesSearch onFindEmployees={onFindEmployees} />
			<EmployeesFilterTabs onFilterEmployees={onFilterEmployees} />
		</div>
	)
}
