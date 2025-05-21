import React, { useEffect, useState } from 'react';
import Comment from '../assets/img/comment.svg';
import Heart from '../assets/img/full_heart.svg';
import Heart_bin from '../assets/img/empty_heart.svg';

const Article = ({title, content}) => {
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        console.log('title', title);
        console.log('content', content);
    }, [])

  return (
    <div className='article_wrap'>
      <h2 className="title">{title}</h2>
      <div className="content">
        <p>{content}</p>
        <div className="info_box">
            <div className="comment">
                <img src={Comment} alt="" />
                <p>0</p>
            </div>
            <div className="like">
                {heart ? (
                    <>
                        <img src={Heart} alt="" onClick={() => { setHeart(!heart) }} />
                        <p>1</p>
                    </>
                ) : (
                    <>
                        <img src={Heart_bin} alt="" onClick={() => { setHeart(!heart) }} />
                        <p>0</p>
                    </>
                )}
            </div>
        </div>
      </div>
      <div className="comment_box">
        <input type="text" placeholder='댓글을 입력해주세요!' />
        <button>등록</button>
      </div>
    </div>
  )
}

export default Article
