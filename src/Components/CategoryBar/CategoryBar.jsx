import "./CategoryBar.css"

const CategoryBar = ({allCategories, setAllCategories}) =>{
    
    const categoryHandler = (categoryName)=>{
    setAllCategories(allCategories =>({
        ...allCategories,
         selectedCategory: categoryName
    }))
    }
    return(
   <div className="category-bar flex-container">
       <button className="btn filter-category md-text" onClick={()=>categoryHandler("")}>All</button>
       {allCategories.categories.map(category => <button key={category._id} className="btn filter-category md-text" onClick={()=>categoryHandler(category.categoryName)}>{category.categoryName}</button> )}
    
    </div>
    )
}

export {CategoryBar}