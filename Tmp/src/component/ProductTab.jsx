import Product from "./Product"

function ProdTab() {
    return (
        <div style={{ display:'flex', flexWrap: "wrap", alignItems:'center', justifyContent:'center', padding:'9px', margin: '20px' }} >
            <Product title="Logitech Master XM" indx={0} />
            <Product title='Apple pencile 'indx={1}/>
            <Product title='Zebronix Keyboard' indx={2}/>
            <Product title="Protonics 12W Bluetooth speaker" indx={3}/>
        </div>
    );
}

export default ProdTab;