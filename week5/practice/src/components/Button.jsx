import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/write');
    }

    return (
        <div className='button_wrap'>
            <button onClick={() => { Going() }} className='write_btn'>글쓰기 Start!</button>
        </div>
    )
}

export default Button
