import React, { useState } from "react";

const Auth = () => {
    const [name, setName] = useState("");

    const onChange = (e) => {
        const { target: { value } } = e;

        setName(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
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