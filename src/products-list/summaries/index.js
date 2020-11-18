

import {parsePrice, parseTitle} from "../../common/display-formatting";
import './style.scss';




export function Summaries(props) {

	const {
		items
	} = props;


	// TO DO: Average needs to account for nulls

	const total = items.reduce( (runningTotal, item) => {
		return runningTotal + item.price
	}, 0);
	const average = total/items.length;


	return (
		
		<div className="product-list__summaries">
	
			<div className="summaries__total">
				<span className="summaries__label">total: </span>
				<span className="summaries__value">{parsePrice(total)}</span>
			</div>
			<div className="summaries__average">
				<span className="summaries__label">average: </span>
				<span className="summaries__value">{parsePrice(average)}</span>
			</div>

		</div>

	);

}

