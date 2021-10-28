import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ListItem(props) {

    const { fact } = props; 

    return (
        <li className="my-3">
            <FontAwesomeIcon icon='magic' /> {fact}
        </li>
    );

}

export default ListItem; 