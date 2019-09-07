import * as CategoryAPIUtil from '../util/categories_api_util'


export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'


const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY,
    category
});


const receiveAllCategories = (categories) => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
});


export const fetchCategory = (id) => dispatch => (
    CategoryAPIUtil.fetchCategory(id).then(category => dispatch(receiveCategory(category)))
)

export const fetchAllCategories = () => dispatch => (
    CategoryAPIUtil.fetchCategories().then(categories => dispatch(receiveAllCategories(categories)))

)