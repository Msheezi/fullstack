json.array! @galleries do |gallery|
 json.extract! gallery, :id, :name, :author_id, :created_at, :updated_at
    
 end