class SearchbknameController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render html: "Rendering searchbkname"
    end

    def create
        bkname = Bookstock.find_by('bookname': params[:bookname])
        if(bkname.nil?)
            render json: "Book does not exit"
        else
            render json: bkname
            
        end
    end
end
