import React, { useEffect, useState } from 'react';
import './Edit.scss';
import Edit from './Edit';

function EditUser() {
  const [userInfo, setUser] = useState();
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
        console.log('부모', typeof userInfo);
      });
  }, []);
  console.log('부모2', userInfo);
  return <Edit stack={stack} userInfo={userInfo} />;
}

export default EditUser;
