import { useState } from "react";

import {parsePrice, parseTitle} from "../../common/display-formatting";
import './style.scss';



export function ListItem(props) {

	const {
		item
	} = props;

    const [contentReady, setContentReady] = useState(false);





	


	return (
			
        <div
            className={[
                "product-list__item",
                contentReady ? "content-ready" : ""
            ].join(" ")}
            >


            <div className="product-list__thumbnail-container">

                <div className="loading-cover">
                    Loading image
                </div>

                <img
                    src = {item.image}
                    width = "100%"
                    alt = {item.description}
                    onLoad = { () => setContentReady(true) }
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

