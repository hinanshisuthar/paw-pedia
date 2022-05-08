const initialState = {
    videos: [],
    category: [],
}

const dataReducer = (state, {type, payload}) => {
    switch (type) {
        case 'SET_VIDEOS':
          return {
              ...state,
              videos: [...payload.map((video) => ({
                  ...video
              }))]
          };  
        case 'SET_CATEGORY':
          return {
              ...state,
              category: [...payload.map((category) => ({
                  ...category
              }))]
          }
        default:    
            return state;
    }
}

export {initialState, dataReducer};