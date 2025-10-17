import { useState } from "react"


export default function Likebtn() {
    let [isLiked, setIsLiked] = useState(false)

    let ToogleLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div>

            <p onClick={ToogleLike} >
                {/* {isLiked.toString()} */}
                {isLiked ?
                    (<i className="fa-solid fa-heart" style={{ color: "red" }} > I love you shembdi  </i> )
                    : (<i className="fa-regular fa-heart"> Click here</i>)}
            </p>
        </div>)
}

