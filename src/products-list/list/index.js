
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

					<li className="item-container">
	
						<div className="item">
							<h3>{parseTitle(item.title)}</h3>
							<div className="price">{parsePrice(item.price)}</div>
							<div className="thumbnail-container">
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

