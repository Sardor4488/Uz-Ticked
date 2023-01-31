import React, { useEffect, useState } from 'react'

const initialState = {
    userName: "",
    password: ""
}

const Singin = () => {

    const [value, setValue] = useState(initialState)

    const SubmitUser = (e) => {
        e.preventDefault()
    }
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }));
    }
    console.log(value);
    return (
        <div>
            <form onSubmit={SubmitUser}>
                <input
                    type="text"
                    placeholder='ism'
                    name='userName'
                    value={value.userName}
                    onChange={inputHandler}
                />
                <input
                    type="password"
                    placeholder='parol'
                    name='password'
                    value={value.password}
                    onChange={inputHandler}
                />
                <button>send</button>
            </form>
        </div>
    )
}

export default Singin;