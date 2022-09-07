import React, { useEffect, useState } from 'react';
import './Edit.scss';
import Edit from './Edit';

function EditUser() {
  const [userInfo, setUser] = useState();
  const [userStack, setUserStack] = useState([]);
  const [stack, setStack] = useState([]);

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
      headers: {
        token: localStorage.getItem('login-token'),
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setUser(res.user[0].nickname);
        setUserStack(res.user[0].stack[0].stack_id);
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

  return <Edit stack={stack} userInfo={userInfo} userStacks={userStack} />;
}

export default EditUser;
