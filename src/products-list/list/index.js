import './style.scss';



export function List(props) {

	const {
		items
	} = props;






	return (
			
		<ul className="product-list">
			{items.map( item => (

				<li className="item-container">

					<div className="item">
						<h3>{item.title}</h3>
						<div className="price">{item.price}</div>
						<div className="thumbnail-container">
							<img
								src = {item.image}
								width = "100%"
								alt = {item.description}
							/>
						</div>
					</div>

				</li>

			))}
		</ul>

	);





}

