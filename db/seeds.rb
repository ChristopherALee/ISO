# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create({username: 'batman', password: 'robin123'})
user2 = User.create({username: 'joker', password: 'harley123'})

Photo.destroy_all
photo1 = Photo.create({
  title: 'test_photo_1',
  description: 'test_description',
  author_id: user1.id
  })
photo2 = Photo.create({
  title: 'test_photo_2',
  description: 'test_description',
  author_id: user1.id
  })
photo3 = Photo.create({
  title: 'test_photo_3',
  description: 'test_description',
  author_id: user1.id
  })
