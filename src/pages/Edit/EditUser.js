import React, { useEffect, useState } from 'react';
import './Edit.scss';
import Edit from './Edit';

function EditUser() {
  const [userInfo, setUser] = useState();
  const [userStack, setUserStack] = useState('');
  const userStacks = userStack.map(data => {
    return data.stack_id;
  });
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch('./mock/post/skills.json')
      .then(res => res.json())
      .then(res => {
        setStack(res);
      });
  }, []);
  useEffect(() => {
    fetch('./mock/editUser/user.json')
      .then(res => res.json())
      .then(res => {
        setUser(res.user[0].nickname);
        setUserStack(res.user[0].stack);
      });
  }, []);
  console.log('부모2', userStacks);
  return <Edit stack={stack} userInfo={userInfo} userStacks={userStacks} />;
}

export default EditUser;
