class Api::CommentsController < ApplicationController

    # skip_before_action :verify_authenticity_token
    # before_action :logged_in

    def create
        @comment = Comment.new(comment_params)
        # @comment.author_id = @current_user.id 
        

    end

    def comment_params
        params.require(:comment).permit(:body, :post_id, :author_id)
    end


end
