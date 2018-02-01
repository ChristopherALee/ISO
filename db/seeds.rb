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
  title: 'Beautiful sunset in a beautiful city.',
  description: 'Every person needs to take one day away.  A day in which one consciously separates the past from the future.  Jobs, family, employers, and friends can exist one day without any one of us, and if our egos permit us to confess, they could exist eternally in our absence.  Each person deserves a day away in which no problems are confronted, no solutions searched for.  Each of us needs to withdraw from the cares which will not withdraw from us.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/anders-jilden-307322.jpg',
  author_id: user3.id})
photo13 = Photo.create({
  title: 'Neon Lights',
  description: 'After all, the best part of a holiday is perhaps not so much to be resting yourself, as to see all the other fellows busy working.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andre-benz-248759.jpg',
  author_id: user4.id})
photo14 = Photo.create({
  title: 'City Life.',
  description: 'Vacations are seen as an antidote to work. They are medicine, a remedy for counteracting the effects of labor.... Vacations allow us to be away from the job, to change the patterns of our day, to alter our routine, to reconfigure our actions and habits, to rediscover ourselves.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/andrea-cau-51160.jpg',
  author_id: user5.id})
photo15 = Photo.create({
  title: 'Beauty in the stars',
  description: 'Astronomy compels the soul to look upward, and leads us from this world to another.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/aperture-vintage-346923.jpg',
  author_id: user6.id})
photo16 = Photo.create({
  title: 'Peace in the middle of nowhere',
  description: 'A vacation is like love: anticipated with pleasure, experienced with discomfort, and remembered with nostalgia.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/chris-holgersson-249309.jpg',
  author_id: user1.id})
photo18 = Photo.create({
  title: 'On Top of the World',
  description: 'The gladdest moment in human life, me thinks, is a departure into unknown lands.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/david-marcu-114194.jpg',
  author_id: user2.id})
photo19 = Photo.create({
  title: 'The sky is the daily bread of the eyes',
  description: 'Ralph Waldo Emerson once asked what we would do if the stars only came out once every thousand years. No one would sleep that night, of course. The world would create new religions overnight. We would be ecstatic, delirious, made rapturous by the glory of God. Instead, the stars come out every night and we watch television.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/luca-baggio-211858.jpg',
  author_id: user3.id})
photo20 = Photo.create({
  title: 'VW Life',
  description: 'Travel makes one modest. You see what a tiny place you occupy in the world. Vroom Vroom.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/erik-odiin-453075.jpg',
  author_id: user4.id})
photo21 = Photo.create({
  title: 'Simplicity',
  description: 'Adventure may hurt you but monotony will kill you.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/ferdinand-stohr-176623.jpg',
  author_id: user5.id})
photo22 = Photo.create({
  title: 'Moo.',
  description: 'We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/florian-van-duyn-387688.jpg',
  author_id: user6.id})
photo23 = Photo.create({
  title: 'Coastal Vibes',
  description: 'One’s destination is never a place, but a new way of seeing things',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/gabriel-santiago-1596.jpg',
  author_id: user1.id})
photo24 = Photo.create({
  title: 'The Road Less Taken',
  description: 'Go, fly, roam, travel, voyage, explore, journey, discover, adventure.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/geran-de-klerk-136351.jpg',
  author_id: user2.id})
photo26 = Photo.create({
  title: 'Solitude',
  description: 'If you reject the food, ignore the customs, fear the religion and avoid the people, you might better stay home.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/hollie-harmsworth-401692.jpg',
  author_id: user3.id})
photo27 = Photo.create({
  title: 'Seeing the world, one step at a time',
  description: 'To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jad-limcaco-272413.jpg',
  author_id: user4.id})
photo28 = Photo.create({
  title: "Beachin'",
  description: 'Not all those who wander are lost',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-224351.jpg',
  author_id: user5.id})
photo29 = Photo.create({
  title: 'Weeee!',
  description: 'Do not follow where the path may lead. Go instead where there is no path and leave a trail.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-224352.jpg',
  author_id: user6.id})
photo30 = Photo.create({
  title: 'Over The Rainbow',
  description: 'Every man can transform the world from one of monotony and drabness to one of excitement and adventure.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jakob-owens-339733.jpg',
  author_id: user1.id})
photo31 = Photo.create({
  title: 'Vacation Life',
  description: 'Life is short and the world is wide.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/james-donaldson-365418.jpg',
  author_id: user2.id})
photo32 = Photo.create({
  title: 'Free Flow',
  description: 'Like all great travelers, I have seen more than I remember, and remember more than I have seen.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jason-blackeye-209586.jpg',
  author_id: user3.id})
photo33 = Photo.create({
  title: 'I wore orange today.',
  description: 'Blessed are the curious for they will have adventures.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/jeremy-bishop-262119.jpg',
  author_id: user4.id})
photo34 = Photo.create({
  title: "Santa's Sleigh Squad 2018",
  description: 'Dropping their mixtape on December 25!',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joe-green-475962.jpg',
  author_id: user5.id})
photo35 = Photo.create({
  title: "Continuity",
  description: 'Remember that happiness is a way of travel – not a destination',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joey-kyber-132520.jpg',
  author_id: user6.id})
photo36 = Photo.create({
  title: 'Bridges',
  description: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/john-towner-128480.jpg',
  author_id: user1.id})
photo37 = Photo.create({
  title: 'The sky is the ultimate art gallery just above us.',
  description: 'Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life. I thought of their unfathomable distance, and the slow inevitable drift of their movements out of the unknown past into the unknown future',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/joshua-earle-183442.jpg',
  author_id: user2.id})
photo38 = Photo.create({
  title: 'Morning Stroll',
  description: 'Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain',
  image: 'https://s3.amazonaws.com/iso-frame-dev/seeds/kalen-emsley-99660.jpg',
  author_id: user3.id})

# user1's follows
follow1 = Follow.create({follower_id: user1.id, followee_id: user2.id })

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
