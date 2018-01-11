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
Comment.destroy_all

user1 = User.create({username: 'guest', password: 'password123'})
user2 = User.create({username: 'Chris', password: 'lily010115'})
user3 = User.create({username: 'Lily', password: 'chris010115'})
user4 = User.create({username: 'Batman', password: 'robin123'})
user5 = User.create({username: 'Superman', password: 'superdog1213'})
user6 = User.create({username: 'Wonderwoman', password: 'invisibleplane'})

photo1 = Photo.create({
  title: 'Beautiful',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget vulputate nulla, ut imperdiet dolor. Phasellus ante nisl, laoreet at luctus ac, accumsan laoreet turpis. Donec pellentesque lectus id dolor suscipit, ut varius leo semper. Integer pretium erat dui, quis hendrerit metus aliquam ut. Nam auctor suscipit volutpat. Mauris ac nisi vel sem vehicula gravida sed vel enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus hendrerit diam a ornare porta. Aenean pulvinar sem non nibh elementum bibendum. Praesent eu augue porttitor, ultricies orci ac, lacinia lacus. Ut ac scelerisque velit.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/adi-constantin-65004.jpg',
  author_id: user2.id
  })
photo2 = Photo.create({
  title: 'Amazing',
  description: 'Pellentesque suscipit bibendum ullamcorper. Mauris id neque sapien. Ut interdum purus imperdiet turpis blandit, eu volutpat ligula malesuada. Sed eget erat vitae turpis venenatis consectetur. Proin at facilisis est, pretium vestibulum diam. Aenean tempor, lorem vitae rutrum placerat, justo magna finibus dolor, sed suscipit velit quam quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eu tincidunt dui, et volutpat orci. Vivamus dictum sapien leo, in vestibulum augue pharetra sed.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andre-benz-248759.jpg',
  author_id: user2.id})
photo3 = Photo.create({
  title: 'Wow',
  description: 'Vivamus cursus nulla vitae neque mattis luctus. Vestibulum non dui quis metus suscipit tincidunt vitae quis ante. Cras vehicula consectetur quam, sit amet euismod ex ultrices in. Integer arcu augue, pretium at nibh in, feugiat luctus odio. Cras molestie accumsan hendrerit. Suspendisse potenti. Proin venenatis nulla ac arcu hendrerit aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vel ornare mauris, quis pellentesque metus. Nulla facilisi. Integer cursus accumsan nisl sollicitudin ultrices. Duis consectetur urna arcu, non aliquet arcu dapibus sed. Quisque luctus ipsum a nisl dictum rutrum. Ut hendrerit euismod velit, et condimentum magna sagittis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andrea-cau-51160.jpg',
  author_id: user2.id})
photo4 = Photo.create({
  title: 'Look At This',
  description: 'Cras non dictum neque. Suspendisse consequat scelerisque eros at volutpat. Cras eu rhoncus odio. Vivamus quis mauris fringilla, condimentum est porttitor, elementum metus. Praesent pulvinar, libero vel interdum venenatis, sapien erat efficitur nisl, vitae tincidunt diam ligula non orci. Proin id placerat nibh. Duis in rhoncus enim, sit amet iaculis metus. Maecenas nec velit at mi rutrum dapibus id id sem. Etiam et magna vitae est accumsan faucibus sit amet id metus. Morbi hendrerit arcu at nulla vehicula, sit amet convallis velit consectetur. Maecenas lacinia risus ut enim sollicitudin, in egestas lorem vulputate. Morbi egestas et quam eu congue. Duis vehicula finibus est, ut feugiat lectus scelerisque non. Nunc varius ultrices tempus. Pellentesque odio lectus, vehicula id elit quis, congue blandit lacus. Vestibulum tempus auctor sapien ac semper.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/daniel-zacatenco-363505.jpg',
  author_id: user3.id})
photo5 = Photo.create({
  title: 'What An Amazing View',
  description: 'Nam imperdiet venenatis ex in fermentum. Cras ut libero ultrices, dignissim ligula vel, scelerisque enim. In eros ex, laoreet non ante nec, ultrices eleifend ipsum. Morbi erat nunc, pharetra quis purus eu, accumsan tincidunt felis. Donec facilisis quis purus sit amet sagittis. Proin vitae nibh ut nisl pretium suscipit. Ut condimentum, eros ut facilisis suscipit, metus dolor tincidunt libero, quis vehicula sapien orci in urna. Ut vitae felis hendrerit, sodales eros efficitur, maximus sem. Pellentesque pretium velit vel fermentum aliquam. Quisque leo odio, porta et nunc sed, tempus luctus ligula.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/david-marcu-114194.jpg',
  author_id: user3.id})
photo6 = Photo.create({
  title: 'Check This Out',
  description: 'Maecenas vitae turpis nibh. Ut consectetur scelerisque malesuada. Nunc quam turpis, mattis eget tristique vel, laoreet vitae magna. Proin iaculis, est tempus hendrerit commodo, purus quam maximus leo, interdum bibendum nibh est quis ligula. Ut malesuada ante sed diam pellentesque sollicitudin. Nam dolor diam, commodo et tempus pharetra, dapibus sit amet enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque laoreet a sem eget tincidunt. Sed rhoncus, eros non imperdiet congue, nibh libero euismod neque, eget scelerisque lorem velit et sem. Pellentesque mattis, libero vitae malesuada iaculis, ligula ipsum interdum mauris, eget venenatis ex nisi nec turpis. Morbi pharetra convallis diam a sollicitudin. Duis et tempor libero. Duis turpis elit, gravida sed nisi et, egestas elementum lacus.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/dominik-lange-35224.jpg',
  author_id: user5.id})
photo7 = Photo.create({
  title: 'Take Me Back',
  description: 'Cras mi dui, gravida eu purus vel, tempus ullamcorper nulla. Sed suscipit ligula nibh, sit amet tristique lectus tincidunt sed. Cras tortor mauris, mattis non enim sit amet, sollicitudin ornare tellus. Ut eros leo, fringilla in arcu ac, facilisis blandit ipsum. Vivamus faucibus nulla tellus, eu pellentesque eros pretium ac. Morbi non gravida lacus. Ut et felis in urna placerat cursus. Donec molestie et nibh eu suscipit. Vestibulum condimentum pellentesque urna, vitae lobortis augue posuere eget. Ut elementum felis urna, ullamcorper laoreet diam varius id. Ut sollicitudin scelerisque turpis, vel fermentum tortor cursus id. In maximus, diam id tincidunt vestibulum, nulla ipsum imperdiet lacus, in faucibus dui felis eu justo. Nullam ultrices, nisl sed dapibus fermentum, urna tellus sagittis lorem, quis rhoncus sapien nulla a augue. Integer euismod, sapien eu porttitor congue, nunc nibh imperdiet purus, a finibus leo massa quis neque.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/ferdinand-stohr-176623.jpg',
  author_id: user5.id})
photo8 = Photo.create({
  title: 'Bingo',
  description: 'Donec blandit, lacus ut congue gravida, justo lectus vestibulum magna, vitae cursus ante leo eu diam. Vestibulum fermentum at enim vitae viverra. Cras venenatis mattis consectetur. Duis feugiat, leo id congue accumsan, turpis ligula cursus risus, sed tempus felis risus pretium leo. In bibendum id diam vel mattis. Nam interdum velit at diam feugiat elementum. Maecenas id sapien enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec accumsan vel eros eu pellentesque.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/henning-witzel-38848.jpg',
  author_id: user5.id})
photo9 = Photo.create({
  title: 'This Vacation Was The Best',
  description: 'Donec lacinia tincidunt tristique. Phasellus venenatis consectetur sapien. Donec ut libero ut ligula ornare eleifend. Nunc viverra tortor nulla, vel congue est ornare nec. Mauris et egestas nibh. Proin scelerisque nulla non felis pulvinar rhoncus. Sed pulvinar orci nec semper placerat. Maecenas in congue nunc. Curabitur interdum justo ut rutrum pharetra.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jonatan-pie-234237.jpg',
  author_id: user5.id})

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

comment1 = Comment.create({photo_id: photo1.id, author_id: user1.id, body: "Wow nice picture!"})
comment2 = Comment.create({photo_id: photo1.id, author_id: user2.id, body: "Coooooool!"})
comment3 = Comment.create({photo_id: photo1.id, author_id: user3.id, body: "How did you take this picture?"})
comment4 = Comment.create({photo_id: photo1.id, author_id: user4.id, body: "This is wack."})
comment5 = Comment.create({photo_id: photo1.id, author_id: user5.id, body: "^ lol"})
comment6 = Comment.create({photo_id: photo1.id, author_id: user6.id, body: ":)"})
