
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
					<FontAwesomeIcon icon={faChevronLeft} />
			</button>

			<button
				className = "page-buttons__next"
				onClick = {onNextClick}
				disabled = { onNextClick ? false : true }
				>
					<FontAwesomeIcon icon={faChevronRight} />
			</button>

		</div>

	);

}

