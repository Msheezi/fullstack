class Api::GalleryItemsController < ApplicationController

    def create
        @galleryitem = GalleryItem.new(galleryitemparams)
           if @galleryitem.save
            render json: @galleryitem
           else
            render json: @galleryitem.errors.full_messages, status: 422
           end

    end

    def destroy

        @galleryitem = GalleryItem.find(params[:id])
        @galleryitem.destroy
        render :index

    end

    private

    def galleryitemparams
        params.require(:galleryItem).permit(:gallery_id, :post_id)
    end


end
