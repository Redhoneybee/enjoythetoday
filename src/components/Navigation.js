import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Navigation = () => {
    const history = useHistory();

    const onClick = () => {
        history.push("/");
    }
    return (
        <nav>
            <FontAwesomeIcon
                className="btn home"
                icon={faHome}
                onClick={onClick}
            />
        </nav>
    );
}

export default Navigation;