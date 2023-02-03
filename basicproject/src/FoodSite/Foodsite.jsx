import React,{useState} from 'react'
import Sdata from '../Sdata'
import FoodCat from './FoodCat';
import FoodData from './FoodData';

const allCategory = [...new Set(Sdata.map((curelem)=>{return curelem.category})),"All"];

const Foodsite = () => {
  const [items,setItems] = useState(Sdata);
  const [catItems,setCatItems] = useState(allCategory);

  const filterData = (findEle) =>{
    if(findEle === "All"){
      setItems(Sdata);
      return;
    }
      const serachData = Sdata.filter((curval)=>{
          return curval.category === findEle
        });
        setItems(serachData)
  }


  return (
    <>
    <h1 style={{textAlign:"center"}}>Filter data Categorywise</h1>
    <hr/>
    <FoodData filterData={filterData} catItems={catItems}/>

    <FoodCat items={items}/>
    </>
  )
}

export default Foodsite