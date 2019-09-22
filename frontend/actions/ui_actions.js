export const OPEN_POST_MODAL = "OPEN_POST_MODAL";
export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL";
export const OPEN_GALLERY_MODAL = "OPEN_GALLERY_MODAL"
export const CLOSE_GALLERY_MODAL = "CLOSE_GALLERY_MODAL"

export const openModal = () => ({
  type: OPEN_POST_MODAL
});

export const closeModal = () => ({
  type: CLOSE_POST_MODAL
});


export const openGalleryModal = () => ({
  type: OPEN_GALLERY_MODAL
})

export const closeGalleryModal = () => ({
  type: CLOSE_GALLERY_MODAL
})