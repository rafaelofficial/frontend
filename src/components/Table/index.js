import './Table.css';
import {useFilters, useTable} from "react-table";
import React, {useState} from "react";

const Table = ({columns, data}) => {

	const {
		getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter
	} = useTable({columns, data}, useFilters);

	const [valueInput, setValueInput] = useState('');

	const handleValueChange = (event) => {
		const value = event.target.value || undefined;
		setFilter('nameOperatorTransaction', value);
		setValueInput(value);
	}

	const handleValueSubmit = (event) => {
		event.preventDefault();
		setValueInput(event.target.value);
	}

	return (
		<table className="table" {...getTableProps()}>
			<thead>
			{headerGroups.map(headerGroup => (<tr {...headerGroup.getHeaderGroupProps()}>
				{headerGroup.headers.map(column => (<th {...column.getHeaderProps()}>{column.render("Header")}</th>))}
			</tr>))}
			</thead>
			<tbody {...getTableBodyProps()}>
			{rows.map((row, i) => {
				prepareRow(row);
				return (<tr {...row.getRowProps()}>
					{row.cells.map(cell => {
						return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
					})}
				</tr>);
			})}
			</tbody>
		</table>
	);
}

export default Table;
