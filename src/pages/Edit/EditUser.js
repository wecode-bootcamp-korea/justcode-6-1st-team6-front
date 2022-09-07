import React, { useEffect, useState } from 'react';
import './Edit.scss';
import Edit from './Edit';

function EditUser() {
  const [userInfo, setUser] = useState();
  const [userStack, setUserStack] = useState([]);
  const userStacks = userStack.map(data => {
    return data.stack_id;
  });
  const [stack, setStack] = useState([]);
  console.log('유저스택', stack);
  console.log('유저이름', userInfo);
  useEffect(() => {
    fetch('http://localhost:8000/skills')
      .then(res => res.json())
      .then(res => {
        setStack(res.stacks);
      });
  }, []);
  // useEffect(() => {
  //   fetch('./mock/post/skills.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       setStack(res);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://localhost:8000/users', {
      method: 'GET',
      header: {
        token: localStorage.getItem('login-token'),
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setUser(res);
        setUserStack(res.user);
      });
  }, []);
  // useEffect(() => {
  //   fetch('./mock/editUser/user.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       setUser(res.user[0].nickname);
  //       setUserStack(res.user[0].stack);
  //     });
  // }, []);

  return <Edit stack={stack} userInfo={userInfo} userStacks={userStacks} />;
}

export default EditUser;
