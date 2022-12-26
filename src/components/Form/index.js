import './Form.css';
import TextField from "../TextField";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [nameOperatorTransaction, setNameOperatorTransaction] = useState('');


	const handleValueChange = (event) => {
		event.preventDefault();
		props.getOperatorTransaction({startDate, endDate, nameOperatorTransaction})
	}

	return (
		<section className="form">
			<form onSubmit={handleValueChange}>
				<h2>Preencha os dados para a pesquisa</h2>
				<TextField
					name="startDate"
					label="Data Inicio"
					type="date"
					value={startDate}
					atChanged={value => setStartDate(value)}
				/>
				<TextField
					name="endDate"
					label="Data Fim"
					type="date"
					value={endDate}
					atChanged={value => setEndDate(value)}
				/>
				<TextField
					name="nameOperatorTransaction"
					label="Operador Transacional"
					type="text"
					placeholder={'Buscar'}
					value={nameOperatorTransaction}
					atChanged={value => setNameOperatorTransaction(value)}
				/>
				<Button
					value={nameOperatorTransaction}
					atChanged={value => setNameOperatorTransaction(value)}
					inputName={nameOperatorTransaction}
				>
					Pesquisar
				</Button>
			</form>
		</section>
	);
}

export default Form;
