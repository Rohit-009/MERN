import Price from "./Price";

function Product({ title, indx }) {
    const oldPrice = ["2000", "3000", "4000", "5000"]
    const newPrice = ["1000", "2000", "3000", "4000"]
    const Desc = ["A smooth and ergonomic device ", 
        "A sleek, precision stylus designed ", 
        " perfect for typing, gaming, and everyday computing.", 
        "Compact speakers that deliver clear"]
    return (
        <div className="product" style={{ border: "2px solid black", margin: "14px", borderRadius: "10px",  justifyContent: "center ", padding:'10px'}}>
            <h4>{title}</h4>
            <p>{Desc[indx] }</p>
            <Price oldPrice={oldPrice[indx]} newPrice={newPrice[indx]} />

        </div>
    )


}

export default Product; 