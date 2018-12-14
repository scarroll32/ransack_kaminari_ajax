class Ddd < ActiveRecord::Migration[5.2]
  def change
   add_column :components, :component_definition, :string
   add_column :components, :manufacturer_name, :string
   add_column :components, :source_name, :string
   add_column :components, :level_type_name, :string

  end
end
