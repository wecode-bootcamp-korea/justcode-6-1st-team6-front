import React from 'react';

function NewPostSelect(props) {
  const { skills, getSelectValue } = props;

  // const selectChange = e => {
  //   const { id, value } = e.target;
  //   setInfo({ ...value, [id]: value });
  // };
  const selectChange = e => {
    const { name, value } = e.target;
    getSelectValue({ [name]: value });
  };
  const skillsData = skills.map(data => {
    return { content: data.name, value: data.id };
  });

  const projectInfo = [
    {
      id: 1,
      title: '모집구분',
      name: 'classification',
      option: [
        {
          content: '스터디/프로젝트',
          value: '',
          disabled: 'disabled',
        },
        { content: '스터디', value: '스터디' },
        { content: '프로젝트', value: '프로젝트' },
      ],
      input: [],
    },
    {
      id: 2,
      title: '모집인원',
      name: 'volume',
      option: [
        {
          content: '인원 미정 ~ 10명 이상',
          value: '',

          disabled: 'disabled',
        },
        { content: '1명', value: '1명' },
        { content: '2명', value: '2명' },
        { content: '3명', value: '3명' },
        { content: '4명', value: '4명' },
        { content: '5명', value: '5명' },
        { content: '6명', value: '6명' },
        { content: '7명', value: '7명' },
        { content: '8명', value: '8명' },
        { content: '9명', value: '9명' },
        { content: '10명 이상', value: '10명 이상' },
      ],
      input: [],
    },
    {
      id: 3,
      title: '진행방식',
      name: 'onoffline',
      option: [
        {
          content: '온라인/오프라인',
          value: '',
          name: '진행방식',
          disabled: 'disabled',
        },
        { content: '온라인', value: '온라인' },
        { content: '오프라인', value: '오프라인' },
      ],
      input: [],
    },
    {
      id: 4,
      title: '진행기간',
      name: 'progress_period',
      option: [
        {
          content: '기간 미정 ~ 6개월 이상',
          value: '',
          disabled: 'disabled',
        },
        { content: '기간미정', value: '기간미정' },
        { content: '1개월', value: '1개월' },
        { content: '2개월', value: '2개월' },
        { content: '3개월', value: '3개월' },
        { content: '4개월', value: '4개월' },
        { content: '5개월', value: '5개월' },
        { content: '6개월', value: '6개월' },
        { content: '장기', value: '장기' },
      ],
      input: [],
    },
    {
      id: 5,
      title: '기술스텍',
      name: 'stack',
      option: [
        {
          content: '프로젝트 사용 스텍',
          value: '',
          disabled: 'disabled',
        },
      ].concat(skillsData),
      input: [],
    },
    {
      id: 6,
      title: '시작예정일',

      option: [],
      input: [{ name: 'start_date', type: 'date', placeholder: '' }],
    },
    {
      id: 7,
      title: '연락방법',
      name: 'contact',
      option: [
        {
          content: '이메일',
          value: '',
          disabled: 'disabled',
        },
        { content: '이메일', value: '이메일' },
      ],
      input: [
        { name: 'contact_content', type: 'email', placeholder: '이메일 주소' },
      ],
    },
  ];
  // const [info, setInfo] = useState({
  //   1: '',
  //   2: '',
  //   3: '',
  //   4: '',
  //   5: '',
  //   6: '',
  //   7: '',
  // });
  return (
    <div className="newPostOption">
      <h2 className="title">
        <span>1</span>프로젝트 기본 정보를 입력해주세요.
      </h2>

      <ul className="selectBox">
        {projectInfo.map(data => {
          return (
            <li key={data.id}>
              <lable>{data.title}</lable>
              {data.option.length > 0 && (
                <select
                  defaultValue=""
                  onChange={selectChange}
                  name={data.name}
                >
                  {data.option.map((select, idx) => {
                    return (
                      <option
                        key={idx}
                        value={select.value}
                        disabled={select.disabled}
                      >
                        {select.content}
                      </option>
                    );
                  })}
                </select>
              )}

              {data.input.length > 0 &&
                data.input.map(el => {
                  return (
                    <input
                      onChange={selectChange}
                      key={data.id}
                      placeholder={el.placeholder}
                      type={el.type}
                      name={el.name}
                    />
                  );
                })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewPostSelect;
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE2NjIwMzkyOTV9.Qdpuo3TfpHXWJlszJTXZempfvvbzTG24Ag5svapy1ls',
//   classification: '스터디',
//   volume: '1명',
//   onoffline: '온라인',
//   progress_period: '2개월',
//   stack: '1,2,3,4,5',
//   start_date: '2022-09-09',
//   contact: '이메일',
//   contact_content: 'example1@gmail.com',
//   title: titleValue,
//   contents: contentValue,
// };
