import React from "react"

import styles from "./AppInfo.module.scss"

type AppInfoProps = {
	data:
		| {
				id: number
				name: string
				salary: string
				like: boolean
				increase: boolean
		  }[]
		| []
}

export const AppInfo: React.FC<AppInfoProps> = ({ data }) => {
	return (
		<div className={styles.appInfo}>
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {data.length}</h2>
			<h2>Премию получат: {[...data.filter((item) => item.like)].length}</h2>
		</div>
	)
}
