import React from 'react'
import { useState } from 'react';
import Category from './Category';
import Item from './data'
import Menu from './Menu';

const allCate = ["all",...new Set(Item.map((val)=> val.category))];


const Index = () => {
    const [menuItems,setMenuItems] = useState(Item);
    const [categories,setCategories] = useState(allCate);

    const filterItems = (category) =>{
        if(category === "all"){
            setMenuItems(Item);
            return;
        }
        const newItems = Item.filter((item)=>item.category === category);
        setMenuItems(newItems);
    }
  return (
    <main>
        <section className='menu section'>
            <div className='title'>
                <h2>Our Menu</h2>
                <div className='underline'></div>
            </div>
            <Category categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default Index