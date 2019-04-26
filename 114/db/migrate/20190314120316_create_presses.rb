class CreatePresses < ActiveRecord::Migration[5.2]
  def change
    create_table :presses do |t|

      t.timestamps
    end
  end
end
