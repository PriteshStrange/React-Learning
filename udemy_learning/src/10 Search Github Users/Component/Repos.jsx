import React, { useContext } from 'react'
import { AppContext } from '../Context/Context';
import styled from 'styled-components';
import {Pie3D,ExampleChart} from './Charts/Index'

const Repos = () => {
  const {Repos} = useContext(AppContext);

  let languages = Repos.reduce((total,item)=>{
    let {language} = item;
    console.log("language",language);
    if(!language) return total;
    if(!total[language]){
      total[language] ={label:language,value:1};
    }else{
      total[language] = {
        ...total[language],
        value:total[language].value + 1
      };
    }
    return total;
  },{});
  languages = Object.values(languages).sort((a,b)=>{
    return b.value - a.value
  }).slice(0,5);

  const chartData = [
    {
      label: "first",
      value: "29"
    },
    {
      label: "Second",
      value: "200"
    },
    {
      label: "Third",
      value: "110"
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages}/>
      {/* <ExampleChart data={chartData}/> */}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos