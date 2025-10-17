function doSomething(){
    console.log("Hello for you")
}

export default function Button() {
    return (
        <><button  onClick={doSomething} >Cick me!</button></>
    )
}