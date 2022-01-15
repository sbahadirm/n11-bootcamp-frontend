import React from "react";
import './ImageIcon.css'

function ImageIcon(props) {

    return (
        <div className="col">
            <div className="p-3 border bg-light">
                <img className="image-icon" src={props.imageUrl} ></img>
                {/* <button type="button" className="btn btn-danger p-1"
                    onClick={props.remove}>Çıkar</button> */}
            </div>
        </div>
    )
}

export default ImageIcon;