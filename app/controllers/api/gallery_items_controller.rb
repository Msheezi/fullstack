class Api::GalleryItemsController < ApplicationController

    before_action :find_gallery_item, only: [:destroy]

    def create
        @galleryitem = GalleryItem.new(galleryitemparams)
           if @galleryitem.save
            render json: @galleryitem
           else
            render json: @galleryitem.errors.full_messages, status: 422
           end

    end

    def find_gallery_item
        @gallery = Gallery.find(params[:id])
        @galleryitem = @gallery.gallery_items.find_by(post_id: params[:post_id])
    end

    def destroy

        # @galleryitem = GalleryItem.find_by(gallery_id: params[:id], post_id: params[:post_id])
        @galleryitem.destroy
        # render :index

    end

    private

    def galleryitemparams
        params.require(:galleryItem).permit(:gallery_id, :post_id)
    end


end
