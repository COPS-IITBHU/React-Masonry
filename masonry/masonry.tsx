import { FC, ReactNode, useEffect, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

interface breakpoint {
	width: number
	columns: number
}

const Masonry: FC<{ breakpoints: breakpoint[]; children: ReactNode[] }> = ({
	breakpoints,
	children,
}) => {
	const [columns, setColumns] = useState(1)
	const width = useWindowWidth()

	useEffect(() => {
		for (let index = 0; index < breakpoints.length; index += 1) {
			const element = breakpoints[index]
			if (element.width > width) {
				setColumns(element.columns)
				break
			}
		}
	}, [width])

	const columnWrapper = {}
	const final = []
	for (let index = 0; index < columns; index += 1) {
		columnWrapper[`column${index}`] = []
	}

	for (let index = 0; index < children.length; index += 1) {
		const columnIndex = index % columns
		columnWrapper[`column${columnIndex}`].push(children[index])
	}

	for (let index = 0; index < columns; index += 1) {
		final.push(<div key={index}>{columnWrapper[`column${index}`]}</div>)
	}

	return <div style={{ display: 'flex' }}>{final}</div>
}

export default Masonry
