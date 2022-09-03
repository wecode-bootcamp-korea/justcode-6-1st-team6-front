import React, { useEffect, useState } from 'react';
import './NewPost.scss';
import { Link } from 'react-router-dom';
import NewPostSelect from './NewPostSelect';

function NewPost() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [skills, setSkills] = useState([]);
  const [selectOption, setOption] = useState({});

  const getSelectValue = value => {
    setOption(selectOption => ({ ...selectOption, ...value }));
  };

  const getTitleValue = e => {
    setTitleValue(e.currentTarget.value);
  };
  const getContentValue = e => {
    setContentValue(e.currentTarget.value);
  };
  const body = { title: titleValue, contents: contentValue, ...selectOption };

  useEffect(() => {
    fetch('../data/skills.json')
      .then(res => res.json())
      .then(skills => {
        setSkills(skills);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('게시글 작성api', {
      method: 'POST',
      headers: {
        //api명세 참고
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {});
  };
  return (
    <div className="newPostContainer">
      {console.log('a', selectOption)}
      {console.log('b', body)}

      <form onSubmit={handleSubmit}>
        <NewPostSelect skills={skills} getSelectValue={getSelectValue} />
        <div className="newPostContent">
          <h2 className="title">
            <span>2</span>프로젝트에 대해 소개해주세요.
          </h2>
          <p>제목</p>
          <input
            type="text"
            placeholder="글 제목을 입력해주세요!"
            className="mb20"
            value={titleValue}
            onChange={getTitleValue}
          />

          <textarea
            placeholder="프로젝트에대해 소개해주세요"
            className="mb20"
            value={contentValue}
            onChange={getContentValue}
          />
          <div className="buttonArea">
            <button>
              <Link to="/">취소</Link>
            </button>
            <button className="bkButton" type="submit">
              글 등록
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewPost;
