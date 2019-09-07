export const fetchGalleries = () => (
    $.ajax({
        method: 'get',
        url: 'api/galleries'
    })
)

export const fetchGallery = (id) => (
    $.ajax({
        method: 'get',
        url: `api/galleries/${id}`
    })
)

export const createGallery = (gallery) => (

        $.ajax({
            method: 'post',
            url: 'api/galleries',
            data: {gallery}
            
        })
    )



export const updateGallery = gallery => (
    $.ajax({
        method: 'patch',
        url: `api/galleries/${gallery.id}`,
        data: { gallery }
    })
)


export const deleteGallery = galleryId => (
    $.ajax({
        method: 'delete',
        url: `api/galleries/${galleryId}`
    })
)