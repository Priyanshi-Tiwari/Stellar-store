import React,{createContext,useContext,useReducer} from 'react'


const FilterContext=createContext();

const filterReducer=(state,action)=>{
    switch(action.type){
        case "SORT":
            return{...state,sort:action.payload};
        case "FILTER_RATING":
        return{...state,rating:action.payload};
        case "FILTER_PRICE":
            return{...state,filterPrice:Number(action.payload)}
        case "CATEGORIES":
            const updatedCategory=state.categories.includes(action.payload)?state.categories.filter((val)=>val!=action.payload):[...state.categories,action.payload]
            return {...state,categories:updatedCategory};
        case "RESET":
            return {
                sort:"",
                rating:"",
                categories:[],
                filterPrice:0
            }

    }
}

const FilterProvider=({children})=>{
    const[state,dispatch]=useReducer(filterReducer,
        {
            sort:"",
            rating:"",
            categories:[],
            filterPrice:0
        })
    return(
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}


const useFilter=()=>useContext(FilterContext)

export {FilterProvider,useFilter}