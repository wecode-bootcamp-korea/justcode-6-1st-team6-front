import React, { useEffect, useRef, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import BannerContainer from '../../components/Banner/BannerContainer';
import PostCardList from '../../components/PostCardList/PostCardList';
import PostCardListCategory from '../../components/PostCardList/PostCardListCategory';
import PostCardListContainer from '../../components/PostCardList/PostCardListContainer';
import SkillList from '../../components/SkillList/SkillList';
import SkillListCategory from '../../components/SkillList/SkillListCategory';
import SkillListContainer from '../../components/SkillList/SkillListContainer';
import SkillListFiltered from '../../components/SkillList/SkillListFiltered';
import { BASE_URL } from '../../config';

import styles from './Home.module.scss';

function Home() {
  /**************** SkillsFilterContainer ****************/

  const [skillList, setSkillList] = useState([]);

  // 인기 / 프론트엔드 / 백엔드 / 모바일 / 기타 / 모두보기
  const [skillsCategoryOption, setSkillsCategoryOption] = useState('인기');
  const handleSkillCategoryOption = option => {
    setSkillsCategoryOption(option);
  };

  // 선택된 스킬
  const [skillListFiltered, setSkillListFiltered] = useState([]);
  const handleSkillListFiltered = skill => {
    let containedElement;
    let isContained;
    skillListFiltered.forEach(el => {
      if (el.id === skill.id) {
        containedElement = el;
        isContained = true;
      }
    });
    if (isContained) {
      setSkillListFiltered(
        skillListFiltered.filter(el => el !== containedElement)
      );
    } else {
      setSkillListFiltered(prev => [...prev, skill]);
    }
  };

  const handleSkillListFilteredRemove = skill => {
    setSkillListFiltered(skillListFiltered.filter(prev => prev !== skill));
  };

  const handleSkillListFilteredRemoveAll = () => {
    setSkillListFiltered([]);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/skills?category=${skillsCategoryOption}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setSkillList(json.stacks));
  }, [skillsCategoryOption]);

  /**************** PostCardListCategory ****************/

  const ref = useRef();
  const [page, setPage] = useState(1);
  const [postCardList, setPostCardList] = useState([]);

  // 전체 / 프로젝트 / 스터디
  const [categoryOption, setCategoryOption] = useState('전체');
  const handleCategoryOption = option => {
    setCategoryOption(option);
  };

  // 모집 중만 보기
  const [switchOption, setSwitchOption] = useState(true);
  const handleSwitchOption = () => {
    setSwitchOption(!switchOption);
  };

  function getPostCardList(page, skillListFiltered) {
    const skillListFilteredString = skillListFiltered
      .map(skill => skill.id)
      .join(',');

    return fetch(
      `${BASE_URL}/posts?page=${page}&limit=6&stacks=${skillListFilteredString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => json.posts);
  }

  useEffect(() => {
    (async () => {
      const data = await getPostCardList(1, skillListFiltered);
      setPage(1);
      setPostCardList(data);
    })();
  }, [skillListFiltered]);

  useEffect(() => {
    const cb = async () => {
      const data = await getPostCardList(page + 1, skillListFiltered);
      setPage(prev => prev + 1);
      setPostCardList(prev => [...prev, ...data]);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        cb();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, page, skillListFiltered]);

  return (
    <div className={styles.container}>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <SkillListContainer>
        <SkillListCategory
          skillsCategoryOption={skillsCategoryOption}
          handleSkillCategoryOption={handleSkillCategoryOption}
        />
        <SkillList
          data={skillList}
          skillListFiltered={skillListFiltered}
          handleSkillListFiltered={handleSkillListFiltered}
        />
        <SkillListFiltered
          data={skillListFiltered}
          handleSkillListFilteredRemove={handleSkillListFilteredRemove}
          handleSkillListFilteredRemoveAll={handleSkillListFilteredRemoveAll}
        />
      </SkillListContainer>
      <PostCardListContainer>
        <PostCardListCategory
          categoryOption={categoryOption}
          handleCategoryOption={handleCategoryOption}
          switchOption={switchOption}
          handleSwitchOption={handleSwitchOption}
        />
        <PostCardList
          data={postCardList}
          categoryOption={categoryOption}
          switchOption={switchOption}
        />
        <div className="observer" ref={ref} />
      </PostCardListContainer>
    </div>
  );
}

export default Home;
