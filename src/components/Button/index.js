import './Button.css';
import {useState} from "react";
import Modal from "../Modal";

const Button = (props) => {
	const {children, inputName} = props;

	const [isModalVisible, setModalVisible] = useState(false);

	return (
		<div>
			<button onClick={() => setModalVisible(true)} className="button">
				{children}
			</button>
			{isModalVisible ? (
				<Modal inputName={inputName} onClose={() => setModalVisible(false)}>
					<h2>Detalhes Bancários</h2>
				</Modal>
			) : null}
		</div>
	);
}

export default Button;