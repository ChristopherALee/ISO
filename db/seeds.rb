# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Follow.destroy_all

user1 = User.create({username: 'guest', password: 'password123'})
user2 = User.create({username: 'chris', password: 'lily010115'})
user3 = User.create({username: 'lily', password: 'chris010115'})
user4 = User.create({username: 'batman', password: 'robin123'})
user5 = User.create({username: 'superman', password: 'superdog1213'})
user6 = User.create({username: 'wonderwoman', password: 'invisibleplane'})

photo1 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/adi-constantin-65004.jpg', author_id: user1.id})
photo2 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andre-benz-248759.jpg', author_id: user1.id})
photo3 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andrea-cau-51160.jpg', author_id: user1.id})
photo4 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/daniel-zacatenco-363505.jpg', author_id: user1.id})
photo5 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/david-marcu-114194.jpg', author_id: user1.id})
photo6 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/dominik-lange-35224.jpg', author_id: user1.id})
photo7 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/ferdinand-stohr-176623.jpg', author_id: user1.id})
photo8 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/henning-witzel-38848.jpg', author_id: user1.id})
photo9 = Photo.create({ title: 'test', image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jonatan-pie-234237.jpg', author_id: user1.id})

# user1's follows
follow1 = Follow.create({follower_id: user1.id, followee_id: user2.id })
follow2 = Follow.create({follower_id: user1.id, followee_id: user3.id })
follow3 = Follow.create({follower_id: user1.id, followee_id: user4.id })
follow4 = Follow.create({follower_id: user1.id, followee_id: user5.id })
follow5 = Follow.create({follower_id: user1.id, followee_id: user6.id })

# user2's follows
follow6 = Follow.create({follower_id: user2.id, followee_id: user1.id })
follow7 = Follow.create({follower_id: user2.id, followee_id: user3.id })
follow8 = Follow.create({follower_id: user2.id, followee_id: user4.id })
follow9 = Follow.create({follower_id: user2.id, followee_id: user5.id })

# user3's follows
follow10 = Follow.create({follower_id: user3.id, followee_id: user1.id })
follow11 = Follow.create({follower_id: user3.id, followee_id: user2.id })
follow12 = Follow.create({follower_id: user3.id, followee_id: user6.id })

# user4's follows
follow13 = Follow.create({follower_id: user4.id, followee_id: user6.id })

# user5's follows
follow14 = Follow.create({follower_id: user5.id, followee_id: user1.id })
follow15 = Follow.create({follower_id: user5.id, followee_id: user2.id })
follow16 = Follow.create({follower_id: user5.id, followee_id: user3.id })
follow17 = Follow.create({follower_id: user5.id, followee_id: user4.id })
follow18 = Follow.create({follower_id: user5.id, followee_id: user6.id })

# user6's follows
follow19 = Follow.create({follower_id: user6.id, followee_id: user3.id })
follow19 = Follow.create({follower_id: user6.id, followee_id: user4.id })
follow19 = Follow.create({follower_id: user6.id, followee_id: user5.id })
