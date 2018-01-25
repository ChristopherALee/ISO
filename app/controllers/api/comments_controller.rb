class Api::CommentsController < ApplicationController
  before_action :logged_in?

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      @photo = @comment.photo
      render 'api/photos/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id && @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 403
    end
  end

  def destroy
    debugger
    @comment = Comment.find(params[:id])
    debugger
    @photo = @comment.photo
    if @comment.author_id == current_user.id && @comment.destroy
      render 'api/photos/show'
    else
      render json: @comment.errors.full_messages, status: 403
    end
  end

  private
  def comment_params
    debugger
    params.require(:comment).permit(:photo_id, :body)
  end
end
