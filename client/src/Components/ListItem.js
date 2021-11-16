import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ListItem(props) {

    const { info, icon, extraClass } = props; 

    return (
        <li className={`my-3 ${extraClass ? extraClass : undefined}`}>
            {icon && <FontAwesomeIcon icon={icon} />} {info}
        </li>
    );

}

export default ListItem; 