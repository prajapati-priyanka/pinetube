import "./CategoryBar.css"

const CategoryBar = ({allCategories}) =>{
    return(
   <div className="category-bar flex-container">
       <button className="btn filter-category md-text">All</button>
       {allCategories.map(category => <button className="btn filter-category md-text">{category.categoryName}</button> )}
    
    </div>
    )
}

export {CategoryBar}