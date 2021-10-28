import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ListItem(props) {

    const { info, icon } = props; 

    return (
        <li className="my-3">
            {icon && <FontAwesomeIcon icon={icon} />} {info}
        </li>
    );

}

export default ListItem; 