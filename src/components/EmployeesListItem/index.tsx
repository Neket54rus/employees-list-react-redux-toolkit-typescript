import React from "react"

import "./EmployeesListItem.scss"

type EmployeesListItemProps = {
	id: number
	name: string
	salary: string
	like: boolean
	increase: boolean
	onDeleteEmployees: (id: number) => void
	onLikeEmployees: (id: number) => void
	onIncreaseEmployees: (id: number) => void
}

export const EmployeesListItem: React.FC<EmployeesListItemProps> = ({
	id,
	name,
	salary,
	like,
	increase,
	onDeleteEmployees,
	onLikeEmployees,
	onIncreaseEmployees,
}) => {
	const liked = like ? " like" : ""
	const increased = increase ? " increase" : ""
	return (
		<li className={`list-group-item d-flex justify-content-between${liked}${increased}`}>
			<span onClick={() => onLikeEmployees(id)} className="list-group-item-label">
				{name}
			</span>
			<input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
			<div className="d-flex justify-content-center align-items-center">
				<button
					onClick={() => onIncreaseEmployees(id)}
					type="button"
					className="btn-cookie btn-sm "
				>
					<i className="fas fa-cookie"></i>
				</button>

				<button
					onClick={() => onDeleteEmployees(id)}
					type="button"
					className="btn-trash btn-sm "
				>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}
