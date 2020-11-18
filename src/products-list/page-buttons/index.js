

import './style.scss';




export function PageButtons(props) {

	const {
		onNextClick,
		onPreviousClick
	} = props;




	return ( 
	
		<div className="product-list__page-buttons">
		
			<button
				className = "page-buttons__previous"
				onClick = { onPreviousClick }
				disabled = { onPreviousClick ? false : true }
				>
				&lt;
			</button>

			<button
				className = "page-buttons__next"
				onClick = {onNextClick}
				disabled = { onNextClick ? false : true }
				>
				&gt;
			</button>

		</div>

	);

}

