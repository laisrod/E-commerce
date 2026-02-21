class CreateOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :orders do |t|
      t.string :status, null: false, default: 'pending'
      t.decimal :total, null: false, precision: 10, scale: 2, default: 0
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.string :phone, null: false

      t.timestamps
    end
  end
end
