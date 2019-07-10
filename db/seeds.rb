# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo Account User
User.create(username:"demo", password:"password",email:"demo@demo.com",first_name:"demo",last_name:"demo")


Category.new(title:"Nature")
Category.new(title:"Architecture")
Category.new(title:"People")
Category.new(title:"Animals")
Category.new(title:"Food")
Category.new(title:"Black and White")


# user=User.new(email:"chris@korsk.com", password: "111111", band_name: "Kors K",
# description: "Kors K is a legend in the bemani scene. With over 20 years of making a variety of music, you'll recognize his signature beats anywhere.")
# path = File.join(Rails.root, 'app', "assets", "images","duetomorrow.jpg")
# user.photo.attach(io: File.open(path), filename: "duetomorrow.jpg")
# user.save