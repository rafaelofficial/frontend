import React, {useEffect, useMemo, useState} from "react";
import Table from "./components/Table";
import api from "./Api";
import Form from "./components/Form";

function App(props) {

	const [data, setData] = useState([]);

	const fetchData = async () => {
		await api.get("/all-transfers").then((response) => {
			setData(response?.data);
		});
	};

	useEffect(() => {
		fetchData().then();
	}, []);

	const columns = useMemo(() => [
		{
			Header: "INFORMACOES BANCARIAS",
			columns: [
				{
					Header: "DADOS",
					accessor: "dateTransfer",
					Cell: ({cell: {value}}) => {
						let date = new Date(value);
						return date.toLocaleString('pt-BR', {
							day: "2-digit", month: "2-digit", year: "numeric"
						});
					}
				},
				{
					Header: "VALENTIA",
					accessor: "value",
					Cell: ({cell: {value}}) => {
						let absoluteNumber = Math.abs(value);
						let result = Number(absoluteNumber).toLocaleString('pt-BR', {
							style: 'currency', currency: 'BRL', minimumFractionDigits: 2,
						});
						return value < 0 ? <span style={{color: 'red'}}>{result}</span> : result;
					}
				},
				{
					Header: "TIPO",
					accessor: "type"
				},
				{
					Header: "OPERADOR",
					accessor: "nameOperatorTransaction",
				},
			],
		},
	], []);

	const [oldOperator, setOperator] = useState([]);

	const atOperator = (newOperator) => {
		setOperator([...oldOperator, newOperator]);
	}

	return (
		<div className="App">
			<main>
				<Form getOperatorTransaction={value => atOperator(value)}/>
				<Table data={data} columns={columns}/>
			</main>
		</div>
	);
}

export default App;
