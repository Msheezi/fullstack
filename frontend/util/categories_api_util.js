export const fetchCategories = () => (
    $.ajax({
        method: 'get',
        url: 'api/categories'
    })
)

export const fetchCategory = (id) => (
    $.ajax({
        method: 'get',
        url: `api/categories/${id}`
    })
)
