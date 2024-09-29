const DataReducer = (state, action) => {
    switch (action.type) {
    case "GET_PRODUCTS": 
    return {...state, products: action.products}
    case "GET_CATEGORY":
        return {...state, category: action.category};
    case "GET_CATEGORY_NAME": 
    return {...state, categoryName: action.categoryName};
    
    }
}

export default DataReducer;