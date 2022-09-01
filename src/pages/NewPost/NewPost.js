import React, { useState } from 'react';
import './NewPost.scss';
import { Link } from 'react-router-dom';

function NewPost() {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const getTitleValue = e => {
    setTitleValue(e.currentTarget.value);
  };
  const getContentValue = e => {
    setContentValue(e.currentTarget.value);
  };
  const projectInfo = [
    {
      id: 1,
      title: '모집구분',
      option: [
        {
          name: '스터디/프로젝트',
          value: '',
          select: 'selected',
          disabled: 'disabled',
        },
        { name: 2, value: '2' },
        { name: 3, value: '3' },
      ],
      input: [],
    },
    {
      id: 2,
      title: '모집인원',
      option: [
        {
          name: '인원 미정 ~ 10명 이상',
          value: '',
          select: 'selected',
          disabled: 'disabled',
        },
        { name: 2, value: '2' },
        { name: 3, value: '3' },
      ],
      input: [],
    },
    {
      id: 3,
      title: '진행방식',
      option: [
        {
          name: '온라인/오프라인',
          value: '',
          select: 'selected',
          disabled: 'disabled',
        },
        { name: 2, value: '2' },
        { name: 3, value: '3' },
      ],
      input: [],
    },
    {
      id: 4,
      title: '진행기간',
      option: [
        {
          name: '기간 미정 ~ 6개월 이상',
          value: '',
          select: 'selected',
          disabled: 'disabled',
        },
        { name: 2, value: '2' },
        { name: 3, value: '3' },
      ],
      input: [],
    },
    {
      id: 5,
      title: '기술스텍',
      option: [
        {
          name: '프로젝트 사용 스텍',
          value: '',
          select: 'selected',
          disabled: 'disabled',
        },
        { name: 2, value: '2' },
        { name: 3, value: '3' },
      ],
      input: [],
    },
    {
      id: 6,
      title: '시작예정일',
      option: [],
      input: [],
    },
    {
      id: 7,
      title: '연락방법',
      option: [{ name: '이메일', value: '2' }],
      input: [{ type: 'email', placeholder: '이메일 주소' }],
    },
  ];
  return (
    <div className="newPostContainer">
      <form>
        <div className="newPostOption">
          <h2 className="title">
            <span>1</span>프로젝트 기본 정보를 입력해주세요.
          </h2>

          <ul className="selectBox">
            {projectInfo.map(data => {
              return (
                <li key={data.id}>
                  <lable>{data.title}</lable>
                  {data.option.length > 0 ? (
                    <select>
                      {data.option.map((select, idx) => {
                        return (
                          <option
                            key={idx}
                            value={select.value}
                            selected={select.select}
                            disabled={select.disabled}
                          >
                            {select.name}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input type="date" />
                  )}
                  {data.input.length > 0 &&
                    data.input.map((data, idx) => {
                      return (
                        <input
                          key={idx}
                          placeholder={data.placeholder}
                          type={data.type}
                        />
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </div>
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
