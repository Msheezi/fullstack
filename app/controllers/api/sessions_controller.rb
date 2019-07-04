class Api::SessionsController < ApplicationController

    def new

    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
            if @user
                login(@user)
                render 'api/users/show';
            else
                render json: ["bad info bro"], status: 401
                
            end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: { message: 'Logout successful.' }
        else 
            render json: ["No active User"]
            
        end
    end
end


 