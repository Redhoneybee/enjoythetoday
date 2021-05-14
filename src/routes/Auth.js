import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/Users";

const Auth = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const onChange = (e) => {
        const { target: { value } } = e;

        setName(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length !== 0) {
            dispatch(setUser(name));
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="너의 이름은?"
                    required
                    value={name}
                    onChange={onChange} />
                <input type="submit" value="시작" />
            </form>
        </>
    )
}

export default Auth;