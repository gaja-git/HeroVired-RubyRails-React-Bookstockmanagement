# RubyonRails-BookStockManagement

create new app with postgresql
rails new book-stock-api -d postgresql

check app
/routes.rb
root "application#index"

/app/controller
def index
render html: "Application index"
end

/config/database.yml
replace
line 26:database - bookdb
line 32: uncomment
line 35: uncomment give your password
line 40: uncomment
save it

rails generate controller bookstock
routes.rb
resoucres :bookstock

rails generate migration create_bookstock

include the table column
t.string :bookname
t.string :bookauthor
t.bigint :bookquantity

run rails db:migrate

/app/bookstock_controller.rb
add read, create, update, destroy function for get/post/put/delete
enter the data for table

for search by book named
rails generate controller searchbkname
/app/searchbkname_controlller.rb
implement the create method

in postman execute post o/p with bookname i/p field

for search by book author
rails generate controller searchbkauthor
/app/searchbkauthor_controller.rb
implement the create method
