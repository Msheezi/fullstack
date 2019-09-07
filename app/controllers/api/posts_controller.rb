class Api::PostsController < ApplicationController

# skip_before_action :verify_authenticity_token
    def show
        @post = Post.find(params[:id])
        
        render :show

    end

    def create
        
        @post = Post.new(post_params)
        # @post.author_id = current_user.id
        
            if @post.save
                render :show
            else
                render json: @post.errors.full_messages, status: 422
            end

    end 

    def index
        @posts = Post.all.order(created_at: :desc)
        #   @posts = posts.includes(:comments)
        render :index
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy

    render :index

    end

    def comments
        @post = Post.find_by(id: params[:post_id])

        if @post
            @comments = @post.comments.order(created_at: :desc)
            render :comments
        end
    end


    def update 
        @post = Post.find_by(id: params[:id])
        if @post && logged_in && (current_user.id == @post.author_id)
            if @post.update(update_params)
                render :show
            else
                render json: @post.errors.full_messages, status: 404
            end
        else
            render json: ["This aint your photo bro"], status: 404
        end

    end

    private

    def post_params
        params.require(:post).permit(:title, :photo, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso, :desc, :gallery_id)
    end

    def update_params
        params.require(:post).permit(:title,  :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso, :desc, :gallery_id)
    end


end
