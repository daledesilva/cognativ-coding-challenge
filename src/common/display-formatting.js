


export const parsePrice = (price) => {
    if(price === 0)		return "Free";

    if(price !== Math.floor(price))		price = price.toFixed(2);
    return `$${price}`;
}

export const parseTitle = (str) => {
    
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );

}