import React,{ useState } from 'react'
import GalleryItems from './GalleryItems';
import ItemMenu from './ItemMenu';
import Sdata from './Sdata';

const allCate = [...new Set(Sdata.map((curElem)=>{
    return (curElem.category)
})),"All"];
console.log(allCate);

const Gallery = () => {
    const [items,setItems] = useState(Sdata);
    const [catItems,setCatItems]= useState(allCate)

    const filterItem = (cat) =>{
        if(cat === "All"){
            setItems(Sdata);
            return
        }
        const serchItems = Sdata.filter((curEle)=>{
            return curEle.category === cat
        })
        setItems(serchItems)
    }
  return (
      <>
    <h1 style={{textAlign:"center"}}>Filter data Categorywise</h1>
    <hr/>
    <ItemMenu filterItem={filterItem} catItems={catItems}/>


    <GalleryItems items={items}/>
      </>
  )
}

export default Gallery