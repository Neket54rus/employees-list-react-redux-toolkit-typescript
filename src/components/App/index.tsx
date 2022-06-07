import React from "react"
import axios from "axios"

import { AppInfo, EmployeesFilter, EmployeesList, EmployeesAddForm } from "../"

import styles from "./App.module.scss"

export const App: React.FC = () => {
	const [employeesList, setEmployeesList] = React.useState<
		| {
				id: number
				name: string
				salary: string
				like: boolean
				increase: boolean
		  }[]
		| []
	>([])
	const [employeesListAfterFilter, setEmployeesListAfterFilter] = React.useState<
		| {
				id: number
				name: string
				salary: string
				like: boolean
				increase: boolean
		  }[]
		| []
	>([])
	const [findState, setFindState] = React.useState<string>("")
	const [filterState, setFilterState] = React.useState<string>("all")

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				await axios.get("../../data.json").then(({ data }) => {
					setEmployeesList(data.employees)
				})
			} catch (err) {
				console.log(err)
			}
		}

		fetchPizza()
	}, [])

	React.useEffect(() => {
		const newList = employeesList.filter((item) => {
			return item.name.toLowerCase().indexOf(findState.toLowerCase()) !== -1
		})

		switch (filterState) {
			case "up":
				setEmployeesListAfterFilter([...newList.filter((item) => item.increase)])
				break
			case "1000+":
				setEmployeesListAfterFilter([...newList.filter((item) => Number(item.salary) >= 1000)])
				break
			default:
				setEmployeesListAfterFilter([...newList])
				break
		}
	}, [employeesList, findState, filterState])

	const onAddNewEmployees = (name: string, salary: string) => {
		if (name.length > 0) {
			const newList = [
				...employeesList,
				{
					id: employeesList.length ? employeesList[employeesList.length - 1].id + 1 : 1,
					name: name,
					salary: !salary ? "0" : salary,
					like: false,
					increase: false,
				},
			]

			setEmployeesList([...newList])
		}
	}

	const onDeleteEmployees = (id: number) => {
		const newList = employeesList.filter((item) => item.id !== id)
		setEmployeesList([...newList])
	}

	const onLikeEmployees = (id: number) => {
		const newList = employeesList.map((item) => {
			if (item.id === id) {
				return { ...item, like: !item.like }
			}

			return item
		})
		setEmployeesList([...newList])
	}

	const onIncreaseEmployees = (id: number) => {
		const newList = employeesList.map((item) => {
			if (item.id === id) {
				return { ...item, increase: !item.increase }
			}

			return item
		})
		setEmployeesList([...newList])
	}

	const onFindEmployees = (string: string) => {
		setFindState(string)
	}

	const onFilterEmployees = (filterType: string) => {
		setFilterState(filterType)
	}

	return (
		<div className={styles.app}>
			<AppInfo data={employeesList} />
			<EmployeesFilter onFindEmployees={onFindEmployees} onFilterEmployees={onFilterEmployees} />
			<EmployeesList
				data={employeesListAfterFilter}
				onDeleteEmployees={onDeleteEmployees}
				onLikeEmployees={onLikeEmployees}
				onIncreaseEmployees={onIncreaseEmployees}
			/>
			<EmployeesAddForm onAddNewEmployees={onAddNewEmployees} />
		</div>
	)
}
