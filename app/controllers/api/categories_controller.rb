class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all
        render :index
    end

    def show
        @category = Category.find(params[:id])
        @posts = @category.posts
        render :show
    end

end
