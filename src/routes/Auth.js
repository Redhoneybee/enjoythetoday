import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        document.querySelector('.nameForm').classList.add('visible');

    }, []);
    return (
        <>
            <form onSubmit={onSubmit} className="nameForm">
                <input
                    type="text"
                    placeholder="너의 이름은?"
                    required
                    value={name}
                    onChange={onChange}
                    className="formInput" />
                <input className="formSubmit" type="submit" value="시작" />
            </form>
        </>
    )
}

export default Auth;