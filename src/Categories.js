import React from 'react';

const Categories = ({categories, filterCategory}) => {
  console.log(categories);

  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button className="filter-btn" key ={category[i]} onClick={()=>filterCategory(category)}>{category}</button>
        )
      })}
    </div>
  );
};

export default Categories;
