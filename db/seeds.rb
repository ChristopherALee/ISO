# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

user1 = User.create({username: 'guest', password: 'password123'})
user2 = User.create({username: 'chris', password: 'lily010115'})
user3 = User.create({username: 'lily', password: 'chris010115'})
user3 = User.create({username: 'batman', password: 'robin123'})
user3 = User.create({username: 'superman', password: 'superdog1213'})
user3 = User.create({username: 'wonderwoman', password: 'invisibleplane'})

# LOCAL TEST IMAGES
# photo1 = Photo.create({
#   title: 'test_photo_1',
#   description: 'test_description',
#   author_id: user1.id
#   })
# photo2 = Photo.create({
#   title: 'test_photo_2',
#   description: 'test_description',
#   author_id: user1.id
#   })
# photo3 = Photo.create({
#   title: 'test_photo_3',
#   description: 'test_description',
#   author_id: user1.id
#   })
# photo4 = Photo.create({
#   title: 'test_photo_4',
#   description: 'test_description',
#   author_id: user1.id
#   })
# photo5 = Photo.create({
#   title: 'test_photo_5',
#   description: 'test_description',
#   author_id: user1.id
#   })
# photo6 = Photo.create({
#   title: 'test_photo_6',
#   description: 'test_description',
#   author_id: user1.id
#   })
