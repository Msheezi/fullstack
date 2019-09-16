class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token

    helper_method :require_login, :logged_in, :current_user


  def current_user
    current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token
    @current_user = user

  end

  def logged_in
    !!current_user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil 
    current_user = nil

  end

  def require_login
    redirect_to new_session_url unless logged_in
  end

end
