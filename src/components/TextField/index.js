import './TextField.css';

const TextField = (props) => {

	const changedPlaceholder = `${props.placeholder}...`;

	return (
		<div className="text-field">
			<label>{props.label}</label>
			<input
				placeholder={changedPlaceholder}
				type={props.type}
				onChange={event => props.atChanged(event.target.value)}
				required={props.required}
			/>
		</div>
	);
}

export default TextField;