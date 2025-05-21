import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Article from './Article';

const Write = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const Going = () => {  // 컴포넌트 교체, 페이지 이동 X
        if (!(title && content)) {
            alert("내용을 입력하세요!");
            return
        }
        setShow(true);
    }

    return (
        <>
            {show ? (
                <Article title={title} content={content}/>
            ) : (
                <div className='write_wrap'>
                    <div className="write">
                        <input value={title} onChange={(e) => {setTitle(e.target.value)}} className="title" type="text" placeholder='제목을 입력해주세요.' />
                        <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className='content' placeholder='내용을 입력해주세요.'></textarea>
                        <div className="button_box">
                            <Link to='/'>취소하기</Link>
                            <button onClick={() => { Going() }}>작성하기</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Write
