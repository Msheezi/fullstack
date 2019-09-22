import * as GalleryAPIUtil from '../util/galleries_api_util'


export const RECEIVE_GALLERY = 'RECEIVE_GALLERY'
export const RECEIVE_ALL_GALLERIES = 'RECEIVE_ALL_GALLERIES'
export const REMOVE_GALLERY = 'REMOVE_GALLERY'
export const RECEIVE_GALLERY_ERRORS = 'RECEIVE_GALLERY_ERRORS'
export const CLEAR_GALLERY_ERRORS = 'CLEAR_GALLERY_ERRORS'

const receiveGallery = (gallery) => ({
    type: RECEIVE_GALLERY,
    gallery
});


const receiveAllGalleries = (galleries) => ({
    type: RECEIVE_ALL_GALLERIES,
    galleries
});

const removeGallery = (galleryId) => ({
    type: REMOVE_GALLERY,
    galleryId
})

const receiveGalleryErrors = (errors) => ({
    type: RECEIVE_GALLERY_ERRORS,
    errors
})

export const clearGalleryErrors = () => {
    return ({
        type: CLEAR_GALLERY_ERRORS,
    });
};

export const fetchGallery = (id) => dispatch => (
    GalleryAPIUtil.fetchGallery(id).then(gallery => dispatch(receiveGallery(gallery)))
)

export const fetchAllGalleries = () => dispatch => (
    GalleryAPIUtil.fetchGalleries().then(galleries => dispatch(receiveAllGalleries(galleries)),
        err => dispatch(receiveGalleryErrors(err.responseJSON)))

)

export const createGallery = (gallery) => dispatch => (
    GalleryAPIUtil.createGallery(gallery).then(gallery=> dispatch(receiveGallery(gallery)),
        // err => dispatch(receiveGalleryErrors(err.responseJSON))
        )
)

export const updateGallery = (gallery) => dispatch => (
    GalleryAPIUtil.updateGallery(gallery).then(gallery => dispatch(receiveGallery(gallery)),
        err => dispatch(receiveGalleryErrors(err.responseJSON)))
)

export const deleteGallery = (galleryId) => dispatch => (
    GalleryAPIUtil.deleteGallery(galleryId).then(gallery => dispatch(removeGallery(galleryId)),
        err => dispatch(receiveGalleryErrors(err.responseJSON)))
)

export const createGalleryItem = (galleryItem) => dispatch => (
    GalleryAPIUtil.createGalleryItem(galleryItem).then(() => dispatch(fetchAllGalleries()),
    err => dispatch(receiveGalleryErrors(err.responseJSON)))
)

export const deleteGalleryItem = (galleryItemId) => dispatch (
    GalleryAPIUtil.deleteGalleryItem(galleryItemId).then(() => dispatch(fetchAllGalleries()))
)
