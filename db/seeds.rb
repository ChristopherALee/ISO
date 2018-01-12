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

user1 = User.create({username: 'guest', password: 'password123', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/anders-jilden-307322.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-224351.jpg'})
user2 = User.create({username: 'Chris', password: 'lily010115', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/teddy-kelley-181683.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jeremy-bishop-262119.jpg'})
user3 = User.create({username: 'Lily', password: 'chris010115', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jad-limcaco-272413.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andre-benz-248759.jpg'})
user4 = User.create({username: 'Batman', password: 'robin123', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/vincent-guth-314899.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/mohammad-alizade-341348.jpg'})
user5 = User.create({username: 'Superman', password: 'superdog123', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/puk-patrick-191902.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/ray-hennessy-229596.jpg'})
user6 = User.create({username: 'Wonderwoman', password: 'invisibleplane', cover_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/matthew-kane-205770.jpg', profile_photo: 'https://s3.amazonaws.com/iso-frame-dev/seeds/samuel-edwards-371139.jpg'})

photo12 = Photo.create({
  title: 'Proin commodo suscipit eros vel suscipit.',
  description: 'Pellentesque sollicitudin turpis eget lorem maximus luctus. Phasellus volutpat justo quis nunc viverra cursus at nec risus. Donec mollis, sem id gravida rhoncus, mi ex dignissim odio, quis iaculis nulla dolor vel ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae diam sagittis, fringilla justo et, accumsan ipsum. Quisque id est a augue iaculis accumsan iaculis vitae lacus.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/anders-jilden-307322.jpg',
  author_id: user3.id})
photo13 = Photo.create({
  title: 'Praesent id libero posuere',
  description: 'Imperdiet felis id, faucibus risus. Nam gravida sem nibh. Ut egestas sit amet nunc et congue. Etiam pulvinar aliquam velit, a egestas mi efficitur quis. Curabitur id turpis tortor. Vestibulum id faucibus sapien. Aenean tempor ante eu nulla blandit, sodales porttitor ipsum tincidunt.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andre-benz-248759.jpg',
  author_id: user4.id})
photo14 = Photo.create({
  title: 'Nulla rutrum quis sapien at accumsan.',
  description: 'Nullam eleifend arcu vitae libero viverra, mattis bibendum velit dapibus. Etiam in risus posuere, commodo felis eget, ornare felis. Praesent ut ipsum nulla. Praesent vulputate quis dolor sed vehicula. Nulla condimentum pretium nisl ut pulvinar. Aliquam sit amet malesuada ligula.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andrea-cau-51160.jpg',
  author_id: user5.id})
photo15 = Photo.create({
  title: 'Maecenas interdum dictum tortor vel pretium. ',
  description: 'Aliquam maximus semper tortor ac congue. In egestas mollis molestie. Proin vel rhoncus turpis, a varius diam. Sed accumsan posuere mauris, vitae imperdiet libero imperdiet quis. Suspendisse potenti. Suspendisse ultrices massa orci, eu interdum nisl iaculis interdum',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/aperture-vintage-346923.jpg',
  author_id: user6.id})
photo16 = Photo.create({
  title: 'Morbi et neque erat.',
  description: 'Mauris tristique ligula ut fermentum tempor. Cras orci velit, aliquam sed magna id, maximus ornare neque. In vestibulum urna id gravida pellentesque. Mauris in nulla a risus placerat ornare a eget enim. Pellentesque ac lorem vehicula, interdum risus in, pretium ipsum. Aenean ultricies vulputate odio sed faucibus. Phasellus blandit tellus vitae enim gravida elementum. Vivamus a nisl a sapien egestas dapibus sed sed ipsum. Sed ut nisl sit amet lorem malesuada iaculis.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/chris-holgersson-249309.jpg',
  author_id: user1.id})
photo18 = Photo.create({
  title: 'Suspendisse dapibus leo massa, eget pretium erat tempus ac',
  description: 'Fusce a nunc at massa pellentesque ornare. Curabitur tempus eleifend dictum. Donec vulputate dui a nisi sollicitudin placerat. Quisque ac vestibulum sem. Cras hendrerit metus ut porta dapibus. Nullam vel sem consequat, consequat velit id, ultricies arcu. Curabitur lorem massa, aliquet lacinia porta eu, gravida nec neque. Etiam in tortor nibh.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/david-marcu-114194.jpg',
  author_id: user2.id})
photo19 = Photo.create({
  title: 'Aliquam erat volutpat',
  description: 'Curabitur eu tincidunt risus. Sed vitae magna luctus risus posuere facilisis. Sed vestibulum egestas dapibus. Aenean sit amet porttitor purus. Nullam nec massa imperdiet, lacinia ex quis, tempus odio',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/luca-baggio-211858.jpg',
  author_id: user3.id})
photo20 = Photo.create({
  title: 'Fusce et nunc mauris',
  description: 'Morbi fermentum gravida mauris et suscipit. Quisque suscipit risus sit amet ipsum sodales, ac porttitor odio laoreet.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/erik-odiin-453075.jpg',
  author_id: user4.id})
photo21 = Photo.create({
  title: 'Curabitur eu est metus',
  description: 'Nam ut aliquam sapien. Sed tempus, est id ultricies aliquam, nisl erat egestas nisl, feugiat consequat magna ligula eget ipsum. In in turpis eu ligula sagittis dapibus et ac purus. Cras lobortis, elit sit amet gravida iaculis, nulla dui scelerisque mauris, laoreet efficitur nulla turpis eu nisi. Nulla scelerisque id ligula quis pellentesque.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/ferdinand-stohr-176623.jpg',
  author_id: user5.id})
photo22 = Photo.create({
  title: 'Quisque id tincidunt nulla. ',
  description: 'Nam luctus placerat turpis. Aliquam ultrices nec neque id convallis. Sed sollicitudin neque leo, ut ullamcorper diam placerat nec. Integer euismod, arcu nec malesuada accumsan',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/florian-van-duyn-387688.jpg',
  author_id: user6.id})
photo23 = Photo.create({
  title: 'Phasellus venenatis nibh non vestibulum laoreet',
  description: 'Aliquam erat volutpat. Curabitur ultricies pulvinar justo. Quisque mollis lacinia blandit. Donec non diam quis ex bibendum ultrices facilisis sed lacus. Sed vitae turpis tincidunt, molestie massa nec, interdum justo. Sed et rutrum metus. Maecenas faucibus fringilla tortor, eu egestas erat eleifend sit amet',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/gabriel-santiago-1596.jpg',
  author_id: user1.id})
photo24 = Photo.create({
  title: 'Praesent porttitor cursus elementum. ',
  description: 'Aenean porttitor quis nunc sed scelerisque. Donec a sodales elit. Morbi at nisi ullamcorper diam gravida congue non id mi. In ac tellus at nulla placerat faucibus sed quis nibh. Fusce eget ante et massa volutpat viverra sit amet at mi. Nam faucibus metus quis augue maximus rhoncus. Mauris in lectus feugiat, vulputate augue sed, dapibus dolor.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/geran-de-klerk-136351.jpg',
  author_id: user2.id})
photo26 = Photo.create({
  title: 'Vivamus lacus massa, malesuada nec dapibus eget, sollicitudin eu neque',
  description: 'Suspendisse lobortis, eros vitae euismod luctus, tortor velit maximus orci, id egestas elit felis maximus dui. Morbi iaculis mauris sed lobortis accumsan. ',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/hollie-harmsworth-401692.jpg',
  author_id: user3.id})
photo27 = Photo.create({
  title: 'Aenean pellentesque dui at ex tempus rhoncus',
  description: 'Etiam vel neque ante. Maecenas eget tincidunt ligula. Praesent convallis in metus quis sollicitudin. Praesent fermentum volutpat felis id dignissim',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jad-limcaco-272413.jpg',
  author_id: user4.id})
photo28 = Photo.create({
  title: 'Phasellus sed massa nibh',
  description: 'Morbi euismod non ipsum eget finibus. Nulla in libero sed metus tristique posuere. Quisque in nisi in nibh lacinia finibus quis at dui. Vivamus tincidunt nibh lectus. Donec urna ante, blandit sit amet interdum in, vulputate eu magna. Aenean sit amet interdum risus.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-224351.jpg',
  author_id: user5.id})
photo29 = Photo.create({
  title: 'Phasellus vitae nunc vitae metus accumsan eleifend',
  description: 'In quis faucibus dolor. Vestibulum vitae faucibus nulla, id viverra nulla. Morbi hendrerit massa dui, condimentum rutrum libero lacinia et',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-224352.jpg',
  author_id: user6.id})
photo30 = Photo.create({
  title: 'Nunc mollis sem non orci egestas, in maximus erat rutrum. ',
  description: 'Sed ut magna non erat ultricies maximus. Aenean at felis sed augue sagittis tempor nec quis lectus. Nullam convallis metus et enim pretium, ut luctus lectus tincidunt. Vivamus metus odio, commodo eget vehicula a, commodo ut felis. Cras ultricies quam at nisi tempor condimentum. Mauris porta ante et est rhoncus auctor.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-339733.jpg',
  author_id: user1.id})
photo31 = Photo.create({
  title: 'Ut neque mi, ullamcorper ut turpis ac, pharetra congue nulla.',
  description: 'Aliquam ornare dolor a varius lacinia. Fusce sed ullamcorper lorem, vel iaculis dolor. Fusce luctus ipsum vel tellus consequat, sed ultrices ligula tristique. Nullam pulvinar, neque eget luctus interdum, elit risus porta ipsum, vitae feugiat magna nisi cursus ante.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/james-donaldson-365418.jpg',
  author_id: user2.id})
photo32 = Photo.create({
  title: 'Morbi sed ultricies nibh, id vulputate leo',
  description: 'Sed ut blandit quam, nec suscipit libero. Nam ac sollicitudin elit. Proin eros arcu, tristique vitae orci eget, molestie molestie turpis. Integer fermentum pharetra nisi quis eleifend. Fusce accumsan eros et diam tincidunt, et accumsan lorem pellentesque.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jason-blackeye-209586.jpg',
  author_id: user3.id})
photo33 = Photo.create({
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Cras eget neque turpis. Sed euismod convallis sapien, consequat rutrum sem porttitor ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eu eros dui. Maecenas lobortis auctor odio, ac pharetra lorem maximus venenatis.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jeremy-bishop-262119.jpg',
  author_id: user4.id})
photo34 = Photo.create({
  title: 'Proin eu leo quis velit varius porttitor non vel lacus',
  description: 'In hac habitasse platea dictumst. Aliquam placerat, libero eget pretium accumsan, quam lacus ultrices enim, vitae sodales turpis sapien ut tellus. Aliquam vestibulum elit tincidunt arcu sollicitudin tincidunt. Fusce in faucibus ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joe-green-475962.jpg',
  author_id: user5.id})
photo35 = Photo.create({
  title: 'Ut egestas ipsum eget est pulvinar, vel lobortis mauris luctus',
  description: 'Etiam lectus sapien, scelerisque vel mauris in, euismod tincidunt tellus. Quisque placerat vel erat eget bibendum. Sed id lectus ut lectus elementum varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a velit libero',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joey-kyber-132520.jpg',
  author_id: user6.id})
photo36 = Photo.create({
  title: 'Suspendisse venenatis urna a magna egestas convallis',
  description: 'Nam vehicula, nibh in luctus facilisis, lectus diam dapibus ligula, ut pulvinar dui eros nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Quisque eu mattis est. Curabitur viverra eros nisl, id euismod leo dignissim mollis. Aliquam faucibus nibh sed lectus tempus tempor. Sed efficitur ipsum erat, ac porta nunc lacinia ut.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/john-towner-128480.jpg',
  author_id: user1.id})
photo37 = Photo.create({
  title: 'Duis rhoncus posuere mi, id hendrerit magna semper ac.',
  description: 'Fusce nec libero blandit, volutpat libero sit amet, vehicula libero. Aenean tincidunt ullamcorper imperdiet. Donec congue a erat vel aliquet. Cras auctor ac dui vitae ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joshua-earle-183442.jpg',
  author_id: user2.id})
photo38 = Photo.create({
  title: 'Nullam pretium sapien eu lorem molestie, id aliquet sapien imperdiet',
  description: 'Ut viverra ex sed diam ultrices, nec faucibus magna tempor. Mauris sollicitudin commodo fermentum. Morbi feugiat efficitur porttitor. In vitae imperdiet mauris. Etiam ultricies a dui non elementum. Nam tincidunt, mi in ultrices pharetra, lacus libero placerat quam, maximus congue risus purus vel risus. Nulla aliquet nibh metus, ac mollis erat dignissim ut',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/kalen-emsley-99660.jpg',
  author_id: user3.id})

# user1's follows
follow1 = Follow.create({follower_id: user1.id, followee_id: user2.id })
follow2 = Follow.create({follower_id: user1.id, followee_id: user3.id })
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
follow16 = Follow.create({follower_id: user5.id, followee_id: user3.id })
follow17 = Follow.create({follower_id: user5.id, followee_id: user4.id })
follow18 = Follow.create({follower_id: user5.id, followee_id: user6.id })

# user6's follows
follow19 = Follow.create({follower_id: user6.id, followee_id: user3.id })
follow19 = Follow.create({follower_id: user6.id, followee_id: user4.id })
follow19 = Follow.create({follower_id: user6.id, followee_id: user5.id })

comment1 = Comment.create({photo_id: photo12.id, author_id: user2.id, body: "Wow nice picture!"})
comment2 = Comment.create({photo_id: photo12.id, author_id: user3.id, body: "Coooooool!"})
comment3 = Comment.create({photo_id: photo12.id, author_id: user4.id, body: "How did you take this picture?"})
comment4 = Comment.create({photo_id: photo12.id, author_id: user5.id, body: "So nice!"})
comment5 = Comment.create({photo_id: photo12.id, author_id: user6.id, body: "Wowza"})
comment6 = Comment.create({photo_id: photo13.id, author_id: user1.id, body: "I like this!"})
comment7 = Comment.create({photo_id: photo13.id, author_id: user3.id, body: "Great picture!"})
comment8 = Comment.create({photo_id: photo13.id, author_id: user4.id, body: "Amazing"})
comment9 = Comment.create({photo_id: photo13.id, author_id: user5.id, body: "Woah"})
comment10 = Comment.create({photo_id: photo13.id, author_id: user6.id, body: "Where is this?!"})
comment11 = Comment.create({photo_id: photo15.id, author_id: user6.id, body: "Wow!!!"})
comment12 = Comment.create({photo_id: photo15.id, author_id: user3.id, body: "Awesome!!!"})
comment12 = Comment.create({photo_id: photo18.id, author_id: user6.id, body: "How can I take photos like this?"})
