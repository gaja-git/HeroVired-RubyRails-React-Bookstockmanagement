class BookstockController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
         render json: Bookstock.all
    end

    
    def show
        b = Bookstock.find_by_id(params[:id])
        if(b.nil?)
            render json:"No book of ID:#{params[:id]}" 
        else
            render json: b
        end
    end

    def searchbybkauthor
        bkauthor = Bookstock.find_by('bookauthor': params[:bookauthor])
        if(bkauthor.nil?)
            render json: "Book does not exit"
        else
            render json: bkauthor
            
        end
    end

    def create
        v = !params[:bookname].empty? and !params[:bookauthor].empty? and !params[:bookquantity].nil?
        if(v)
            p = Bookstock.create('bookname': params[:bookname], 'bookauthor': params[:bookauthor], 'bookquantity': params[:bookquantity])
            puts p
            render json: "Book Added"
        else
            render json: "Book not added" 
        end    
    end

    def update
        p = Bookstock.find(params[:id].to_i)
        p.update('bookname': params[:bookname], 'bookauthor': params[:bookauthor], 'bookquantity': params[:bookquantity])
        render json: "Book updated"
    end

    def destroy
        p = Bookstock.find(params[:id])
        p.destroy
        render json: "Book deleted"
    end
end
