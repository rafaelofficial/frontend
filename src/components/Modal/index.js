import './Modal.css';
import {useEffect, useState} from "react";
import api from "../../Api";

const Modal = (props) => {
	const {
		id = 'modal', onClose = () => {
		}, children, inputName
	} = props;

	const [data, setData] = useState([]);

	const handleOutSideClick = (event) => {
		if (event.target.id === id) {
			onClose();
		}
	}

	const getData = async () => {
		await api.get(`/transfer-by-name?name=${inputName}`)
			.then((response) => {
				try {
					if (response.status === 200) {
						setData(response.data);
					}
				} catch (e) {
					console.error(e);
				}
			});
	};

	useEffect(() => {
		getData().then();
	}, []);

	return (
		<div id={id} className="modal" onClick={handleOutSideClick}>
			<div className="container">
				<button onClick={onClose} className="close"/>
				<div className="content">{children}</div>
				{data.map((value, index) => {
					return (
						<div className="content-data" key={index}>
							<h3>TOTAL TRANSAÇÕES: {index + 1}</h3>
							<p><strong>Operador: </strong>{value.nameOperatorTransaction}</p>
							<p><strong>Tipo: </strong>{value.type}</p>
							<p><strong>Valentia: </strong>{value.value
								.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
							</p>
							<p><strong>Data de Tranfenrência: </strong>{new Date(value.dateTransfer)
								.toLocaleString('pt-BR', {
									day: "2-digit", month: "2-digit", year: "numeric"
								})}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}


export default Modal;