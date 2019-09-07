export const fetchCategory = () => (
    $.ajax({
        method: 'get',
        url: 'api/categories'
    })
)

export const fetchCategories = (id) => (
    $.ajax({
        method: 'get',
        url: `api/categories/${id}`
    })
)
