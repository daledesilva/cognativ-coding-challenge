import {parsePrice, parseTitle} from "../../common/display-formatting";
import './style.scss';



export function ListItem(props) {

	const {
		item
	} = props;





	// revealItem = (key) => {
		
	// }


	


	return (
			
		<div className="product-list__item">


            <div className="product-list__thumbnail-container">
                <img
                    src = {item.image}
                    width = "100%"
                    alt = {item.description}
                    // onLoad = { () => revealItem(item.key)}
                />
            </div>

            <div className="product-list__item-details">
                <h3>
                    {parseTitle(item.title)}
                </h3>
                <div className="product-list__price">{parsePrice(item.price)}</div>
                <p>{item.description}</p>
            </div>


            
        </div>

	);





}

