json.array! @galleries do |gallery|
 json.extract! gallery, :id, :name, :author_id, :post_ids, :updated_at
    
 end