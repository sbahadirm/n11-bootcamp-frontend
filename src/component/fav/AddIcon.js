import React from "react";
import './AddIcon.css'


function AddIcon(props) {

    return (
        <div className="col">
            <div className="p-3 border bg-light">
                <a href={props.link}>
                    <img className="image" 
                     src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/03-512.png" 
                    ></img>
                </a>

            </div>
        </div>
    )
}

export default AddIcon;