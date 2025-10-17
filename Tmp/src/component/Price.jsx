function Price({oldPrice, newPrice}){
    
    return( 
        <div style={{ backgroundColor: 'yellow' , height:'30px' }}  >
        <span style={{ textDecoration:'line-through 1px red '  }}> {oldPrice}</span>
        &nbsp;
        &nbsp;
        &nbsp;
        <span style={{fontWeight:'bold'}}> {newPrice}</span>
        </div>
    )
}
export default Price