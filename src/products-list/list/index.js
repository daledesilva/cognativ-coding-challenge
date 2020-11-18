

import {ProductListItem} from "../";
import './style.scss';



export function List(props) {

	const {
		items
	} = props;





	// revealItem = (key) => {
		
	// }


	


	return (
			
		<ul className="product-list">
			{items.map( (item, itemIndex) => (

				item.price !== null && (

					<li
						key = {itemIndex}	// Note: This should be replaced with a unique id if list ever supports reordering
						className="product-list__item-container"
						>
	
						<ProductListItem item={item}/>
	
					</li>

				)


			))}
		</ul>

	);





}

