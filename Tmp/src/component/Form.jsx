
function submit(event){
    event.preventDefault( )
    console.log('Form submitted succesfully')
}

export default function Form(){
    return(
        <div>
            <input placeholder="Type here" type="text" />
            <button onClick={submit }> Click here!</button>
        </div>

    )
}