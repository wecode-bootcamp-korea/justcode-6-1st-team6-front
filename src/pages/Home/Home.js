import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
      if (skillListFiltered.length === 0) {
        setPostCardList([]);
        setPrevFilteredString('');
      }
    } else {
      setSkillListFiltered(prev => [...prev, skill]);
    }
  };

  const handleSkillListFilteredRemove = skill => {
    setSkillListFiltered(skillListFiltered.filter(prev => prev !== skill));
    if (skillListFiltered.length === 0) {
      setPostCardList([]);
      setPrevFilteredString('');
    }
  };

  const handleSkillListFilteredRemoveAll = () => {
    setSkillListFiltered([]);
    setPrevFilteredString('');
    setPostCardList([]);
  };

  useEffect(() => {
    fetch(
      // `/mock/main/skills-${skillsCategoryOption}.json`, {
      `${BASE_URL}/skills?category=${skillsCategoryOption}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => setSkillList(json.stacks));
  }, [skillsCategoryOption]);

  /**************** PostCardListCategory ****************/

  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  const [prevFilteredString, setPrevFilteredString] = useState('');
  const getPostCardList = useCallback(async () => {
    const skillListFilteredString = skillListFiltered
      .map(skill => {
        return skill.id;
      })
      .join(',');

    let isNewPostCardList = false;
    if (prevFilteredString !== skillListFilteredString) {
      setPage(1);
      isNewPostCardList = true;
    }

    setIsLoading(true);
    await fetch(
      // `/mock/main/postCardList${page}.json`, {
      `${BASE_URL}/posts?page=${page}&limit=6&stacks=${skillListFilteredString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => {
        if (isNewPostCardList) {
          setPostCardList(json.posts);
        } else {
          setPostCardList(prev => [...prev, ...json.posts]);
        }
        setPrevFilteredString(skillListFilteredString);
      });
    setIsLoading(false);
  }, [page, prevFilteredString, skillListFiltered]);

  useEffect(() => {
    getPostCardList();
  }, [getPostCardList]);

  useEffect(() => {
    // TODO: Mock 데이터의 한계로, 불러올 데이터가 없어서 발생할 수 있는 에러를 방지하기 위한 page 조건 삭제 필요
    // if (!isLoading && inView && page === 1) {
    if (!isLoading && inView) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, inView]);

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
        <div ref={ref} />
      </PostCardListContainer>
    </div>
  );
}

// function changeSkillsCategoryOptionToEng(opt) {
//   if (opt === '인기') return 'popular';
//   if (opt === '프론트엔드') return 'front';
//   if (opt === '백엔드') return 'back';
//   if (opt === '모바일') return 'mobile';
//   if (opt === '기타') return 'ect';
//   if (opt === '모두보기') return 'all';
// }

export default Home;
