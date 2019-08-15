class Api::CommentsController < ApplicationController

    # skip_before_action :verify_authenticity_token
    # before_action :logged_in

    def create
        @comment = Comment.new(comment_params)
        # @comment.author_id = @current_user.id 
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def show
        @post = Post.find(params[:id])
        @comments = @post.comments
        render :show
        
    end

    def index
        @comments = Comment.all
        render :index
    end


    def comments

    end

    private

    def comment_params
        params.require(:comment).permit(:body, :post_id, :author_id)
    end




end
