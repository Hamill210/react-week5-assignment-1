const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectCategoryId: null,
  selectRegionId: null,
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'clickCategory') {
    const { id } = action.payload;

    return {
      ...state,
      selectCategoryId: id,
    };
  }

  if (action.type === 'clickRegion') {
    const { id } = action.payload;

    return {
      ...state,
      selectRegionId: id,
    };
  }

  return state;
}
