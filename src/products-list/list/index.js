
import {parsePrice, parseTitle} from "../../common/display-formatting";
import './style.scss';



export function List(props) {

	let {
		items
	} = props;




	


	return (
			
		<ul className="product-list">
			{items.map( item => (

				item.price !== null && (

					<li className="product-list__item-container">
	
						<div className="product-list__item">
							<h3>{parseTitle(item.title)}</h3>
							<div className="product-list__price">{parsePrice(item.price)}</div>
							<div className="product-list__thumbnail-container">
								<img
									src = {item.image}
									width = "100%"
									alt = {item.description}
								/>
							</div>
						</div>
	
					</li>

				)


			))}
		</ul>

	);





}

