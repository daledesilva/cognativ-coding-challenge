import './style.css';



export function Error(props) {

	const {
		error
	} = props;


	return <div>Error: {error.message}</div>;

}
