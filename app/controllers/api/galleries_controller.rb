class Api::GalleriesController < ApplicationController


    def index
        @galleries = Gallery.all 
        
        render :index

    end

    def show
        @gallery = Gallery.find(params[:id])
        render :show
    end

    def create
        @gallery = Gallery.new(gallery_params)
            if @gallery.save
                    render :show
            else
                render json: @gallery.errors.full_messages, status: 422
            end
    end

    def update
        @gallery = Gallery.find(params[:id])
            if @gallery && logged_in && (current_user.id == @gallery.author_id)
                if @post.update(gallery_params)
                    render :show
                else
                    render json: @gallery.errors.full_messages, status: 500
                end
            else
                render json: ["This aint your gallery bro"], status: 404
            end 
    end

    def destroy
        @gallery = Gallery.find(params[:id])
        @gallery.destroy
        render :index

        
    end

    private

    def gallery_params
        params.require(:gallery).permit(:name, :author_id)
    end
end
