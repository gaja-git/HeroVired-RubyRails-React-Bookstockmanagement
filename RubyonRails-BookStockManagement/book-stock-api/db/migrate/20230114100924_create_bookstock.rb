class CreateBookstock < ActiveRecord::Migration[7.0]
  def change
    create_table :bookstocks do |t|
      t.string :bookname
      t.string :bookauthor
      t.bigint :bookquantity
      t.timestamps
    end
  end
end
