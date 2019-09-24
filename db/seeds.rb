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
user1 = User.create!(username:"demo", password:"password",email:"demo@demo.com",first_name:"Mike",last_name:"Roscopic")
user2 = User.create!(username:"fireball", password:"password", email: "firemail@mail.com", first_name:"Ally", last_name:"Gator")
user3 = User.create!(username:"iceball", password:"password", email: "icemail@mail.com", first_name:"Horace", last_name:"Cope")
user4 = User.create!(username:"snowball", password:"password", email: "snowmail@mail.com", first_name:"Jack", last_name:"Pott")
user5 = User.create!(username:"rainball", password:"password", email: "rainmail@mail.com", first_name:"Don", last_name:"Keigh")


Category.destroy_all
cat1 = Category.create!(title:"Nature")
cat2 = Category.create!(title:"Architecture")
cat3 = Category.create!(title:"People")
cat4 = Category.create!(title:"Animals")
cat5 = Category.create!(title:"Food")
cat6 = Category.create!(title:"Black and White")

Post.destroy_all

#create one post per user, then set that as their bgphoto
#create a batch of at least 15 photos per user
#create at least 4 galleries per user
#have a couple of photos per gallery
#maybe have one user with no posts to show the default actions for users with no
##  background details

file0 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/Manhattan+Ellis+Island.jpg')
post0 = Post.create(title:"Manhattan", author_id: user1.id)
post0.photo.attach(io: file0, filename: "Manhattan+Ellis+Island.jpg")
post0.save

user1.bgphoto = post0.id 
user1.save

# user2.bgphoto = post0.id 
# user2.save
# user3.bgphoto = post0.id 
# user3.save
# user4.bgphoto = post0.id 
# user4.save
# user5.bgphoto = post0.id 
# user5.save

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


#user 2
file15 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post15 = Post.create(title:"Red Rocks",  author_id: user2.id)
post15.photo.attach(io: file15, filename: "redrocks.jpg")
post15.save

file16 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post16 = Post.create(title:"Red Rocks",  author_id: user2.id)
post16.photo.attach(io: file16, filename: "redrocks.jpg")
post16.save

file17 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post17 = Post.create(title:"Red Rocks",  author_id: user2.id)
post17.photo.attach(io: file17, filename: "redrocks.jpg")
post17.save

file18 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post18 = Post.create(title:"Red Rocks",  author_id: user2.id)
post18.photo.attach(io: file18, filename: "redrocks.jpg")
post18.save

file19 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post19 = Post.create(title:"Red Rocks",  author_id: user2.id)
post19.photo.attach(io: file19, filename: "redrocks.jpg")
post19.save

file20 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post20 = Post.create(title:"Red Rocks",  author_id: user2.id)
post20.photo.attach(io: file20, filename: "redrocks.jpg")
post20.save

file21 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post21 = Post.create(title:"Red Rocks",  author_id: user2.id)
post21.photo.attach(io: file21, filename: "redrocks.jpg")
post21.save

file22 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post22 = Post.create(title:"Red Rocks",  author_id: user2.id)
post22.photo.attach(io: file22, filename: "redrocks.jpg")
post22.save

file23 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post23 = Post.create(title:"Red Rocks",  author_id: user2.id)
post23.photo.attach(io: file23, filename: "redrocks.jpg")
post23.save

file24 = open('https://mypx-dev.s3-us-west-1.amazonaws.com/redrocks.jpg')
post24 = Post.create(title:"Red Rocks",  author_id: user2.id)
post24.photo.attach(io: file24, filename: "redrocks.jpg")
post24.save






Gallery.destroy_all
#user1 Galleries
gallery1 = Gallery.create!(name:"Pretty Faces", author_id: user1.id)
gallery2 = Gallery.create!(name:"One With Nature", author_id: user1.id)
gallery3 = Gallery.create!(name:"Tall Buildings", author_id: user1.id)

gallery4 = Gallery.create!(name:"New York", author_id: user2.id)
gallery5 = Gallery.create!(name:"Pretty Faces", author_id: user2.id)
gallery6 = Gallery.create!(name:"Pretty Faces", author_id: user2.id)

gallery7  = Gallery.create!(name:"Pretty Faces", author_id: user3.id)
gallery8 = Gallery.create!(name:"Pretty Faces", author_id: user3.id)
gallery9 = Gallery.create!(name:"Pretty Faces", author_id: user3.id)

gallery10 = Gallery.create!(name:"Pretty Faces", author_id: user4.id)
gallery11 = Gallery.create!(name:"Pretty Faces", author_id: user4.id)
gallery12 = Gallery.create!(name:"Pretty Faces", author_id: user4.id)

GalleryItem.destroy_all

gallery1item1 = GalleryItem.create!(gallery_id: gallery1.id, post_id: post5.id)
gallery1item2 = GalleryItem.create!(gallery_id: gallery1.id, post_id: post6.id)
gallery1item3 = GalleryItem.create!(gallery_id: gallery1.id, post_id: post7.id)
gallery1item4 = GalleryItem.create!(gallery_id: gallery1.id, post_id: post11.id)
gallery1item5 = GalleryItem.create!(gallery_id: gallery1.id, post_id: post8.id)

gallery2item1 = GalleryItem.create!(gallery_id: gallery2.id, post_id: post3.id)
gallery2item2 = GalleryItem.create!(gallery_id: gallery2.id, post_id: post9.id)
gallery2item3 = GalleryItem.create!(gallery_id: gallery2.id, post_id: post10.id)
gallery2item4 = GalleryItem.create!(gallery_id: gallery2.id, post_id: post12.id)
gallery2item5 = GalleryItem.create!(gallery_id: gallery2.id, post_id: post14.id)

gallery3item1 = GalleryItem.create!(gallery_id: gallery3.id, post_id: post2.id)
gallery3item2 = GalleryItem.create!(gallery_id: gallery3.id, post_id: post4.id)

Comment.destroy_all

post1comment1 = Comment.create!(post_id: post1.id, author_id: user2.id, body: "Nice Picture! I see your obsession with bridges continues")
post1comment2 = Comment.create!(post_id: post1.id, author_id: user3.id, body: "Great Pic!!")
post1comment3 = Comment.create!(post_id: post1.id, author_id: user4.id, body: "Amazing Color!")
post2comment1 = Comment.create!(post_id: post2.id, author_id: user2.id, body: "Home of the criminals!!! lol, nice pic though!")
post2comment2 = Comment.create!(post_id: post2.id, author_id: user3.id, body: "Halls of Greatness!!")
post2comment3 = Comment.create!(post_id: post2.id, author_id: user4.id, body: "Four Score...something something something")
post3comment1 = Comment.create!(post_id: post3.id, author_id: user2.id, body: "Reminds me of my time in Japan")
post3comment2 = Comment.create!(post_id: post3.id, author_id: user3.id, body: "Great Pic!!")
post3comment3 = Comment.create!(post_id: post3.id, author_id: user4.id, body: "I love Cherry Blossoms!")



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