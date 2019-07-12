# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
require 'open-uri'
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 



# Demo Account User
User.destroy_all
user1 = User.create!(username:"demo", password:"password",email:"demo@demo.com",first_name:"demo",last_name:"demo")

Category.destroy_all
cat1 = Category.create!(title:"Nature")
cat2 = Category.create!(title:"Architecture")
cat3 = Category.create!(title:"People")
cat4 = Category.create!(title:"Animals")
cat5 = Category.create!(title:"Food")
cat6 = Category.create!(title:"Black and White")


file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
post1 = Post.create(title:"Bridge",  author_id: user1.id)
post1.photo.attach(io: file1, filename: "bridge.jpg")
post1.save

file2 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/capital.jpg')
post2 = Post.create(title:"The Capital",  author_id: user1.id)
post2.photo.attach(io: file2, filename: "capital.jpg")
post2.save

file3 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/cherryblosson.jpg')
post3 = Post.create(title:"Cherry Blossom",  author_id: user1.id)
post3.photo.attach(io: file3, filename: "cherryblosson.jpg")
post3.save

file4 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/intersection.jpg')
post4 = Post.create(title:"CrossWalks",  author_id: user1.id)
post4.photo.attach(io: file4, filename: "intersection.jpg")
post4.save

file5 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/lupita1.jpg')
post5 = Post.create(title:"LUPITA!",  author_id: user1.id)
post5.photo.attach(io: file5, filename: "lupita1.jpg")
post5.save

file6 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/lupitadress.jpg')
post6 = Post.create(title:"More Lupita",  author_id: user1.id)
post6.photo.attach(io: file6, filename: "lupitadress.jpg")
post6.save

file7 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/lupitaprofile.png')
post7 = Post.create(title:"Up Close",  author_id: user1.id)
post7.photo.attach(io: file7, filename: "lupitaprofile.png")
post7.save

file8 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/moneyfan.jpg')
post8 = Post.create(title:"Bitch Betta Have My Money!",  author_id: user1.id)
post8.photo.attach(io: file8, filename: "moneyfan.jpg")
post8.save

file9 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/peacock.jpg')
post9 = Post.create(title:"Peacocking!",  author_id: user1.id)
post9.photo.attach(io: file9, filename: "peacock.jpg")
post9.save

file10 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/plant.jpg')
post10 = Post.create(title:"Pretty Plant",  author_id: user1.id)
post10.photo.attach(io: file10, filename: "plant.jpg")
post10.save

file11 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/straightonselfie.jpg')
post11 = Post.create(title:"Oh Heeeyyyyy....",  author_id: user1.id)
post11.photo.attach(io: file11, filename: "straightonselfie.jpg")
post11.save

file12 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/lakevines.jpg')
post12 = Post.create(title:"I See You",  author_id: user1.id)
post12.photo.attach(io: file12, filename: "lakevines.jpg'")
post12.save

file13 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/flowercoffee.jpg')
post13 = Post.create(title:"Spot of Tea?",  author_id: user1.id)
post13.photo.attach(io: file13, filename: "flowercoffee.jpg")
post13.save

file14 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/clearlake.jpg')
post14 = Post.create(title:"Clear Lake",  author_id: user1.id)
post14.photo.attach(io: file14, filename: "clearlake.jpg")
post14.save

# file15 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post15 = Post.create(title:"Bridge",  author_id: user1.id)
# post15.photo.attach(io: file15, filename: "bridge.jpg")
# post15.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save

# file1 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/bridge.jpg')
# post1 = Post.create(title:"Bridge",  author_id: user1.id)
# post1.photo.attach(io: file1, filename: "bridge.jpg")
# post1.save





end
# user=User.new(email:"chris@korsk.com", password: "111111", band_name: "Kors K",
# description: "Kors K is a legend in the bemani scene. With over 20 years of making a variety of music, you'll recognize his signature beats anywhere.")
# path = File.join(Rails.root, 'app', "assets", "images","duetomorrow.jpg")
# user.photo.attach(io: File.open(path), filename: "duetomorrow.jpg")
# user.save