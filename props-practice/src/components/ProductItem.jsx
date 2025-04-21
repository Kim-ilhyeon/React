
function ProductItem({name, price, isSale}) {
// function ProductItem(props) {
// props.name, props.price, props.isSale
    return (
        <div style={{border: 'solid 2px #2c2c2c', padding: '10px', textAlign: 'center'}}>
            <h3>{name}</h3>
            <p>\{price}</p>
            {isSale && "세일중"}
        </div>
    );
}

export default ProductItem;