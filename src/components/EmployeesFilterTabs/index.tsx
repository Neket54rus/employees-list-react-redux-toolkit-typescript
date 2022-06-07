import React from "react"

import styles from "./EmployeesFilterTabs.module.scss"

type EmployeesFilterTabsProps = {
	onFilterEmployees: (filterType: string) => void
}

export const EmployeesFilterTabs: React.FC<EmployeesFilterTabsProps> = ({ onFilterEmployees }) => {
	const [active, setActive] = React.useState<number>(1)
	const btns = [
		{ id: 1, title: "Все сотрудники", type: "all" },
		{ id: 2, title: "На повышение", type: "up" },
		{ id: 3, title: "З/П больше 1000$", type: "1000+" },
	]

	const onClickBtn = (id: number, type: string) => {
		setActive(id)
		onFilterEmployees(type)
	}

	return (
		<div className={`btn-group ${styles.btnGroup}`}>
			{btns.map((item) => {
				return (
					<button
						key={item.id}
						onClick={() => onClickBtn(item.id, item.type)}
						className={`btn ${item.id === active ? "btn-light" : "btn-outline-light"}`}
					>
						{item.title}
					</button>
				)
			})}
		</div>
	)
}
