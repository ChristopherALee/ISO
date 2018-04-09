<div align="center">
  <img src="./app/assets/images/logo/ISO_Black.png" style="width: 200px"></img>
</div>

<br>

![Landing-Page](./screenshots/iso-ss-final.png)

[ISO Live-Demo](https://iso-frame.herokuapp.com/)

ISO is a full-stack single-page app inspired by photo sharing websites like 500px. It's built with Ruby on Rails on the backend for a RESTful JSON API and React/Redux on the frontend.

## Features

* User Authentication with automated demo-login
* User photo uploads
* User ability to follow/unfollow users for a dynamic feed page
* User ability to comment on photos
* Discover page to browse new photos and find new users to follow
* Responsive photo display on various screen sizes via CSS
* Amazon Web Services (AWS) S3 Storage
* Uses PostgreSQL to handle database responsibilities

### User Authentication with automated demo-login

Users can use the demo-login provided to get right into the action.

![Login](./screenshots/login.gif)

### User Photo Uploads

Users can upload photos whether for their profile feed, profile photo, or cover photo.

![Upload](./screenshots/upload.gif)

### User ability to follow/unfollow users

Users can follow or unfollow users, which will dynamically change the photos that are appearing on the current user's feed.

![Follow](./screenshots/follow.gif)

### Mobile Responsiveness

ISO's photo gallery is responsive to varying screen sizes. Users can share similar experiences on ISO on any device.

![Mobile-Responsiveness](./screenshots/mobile_resp.gif)

### Future Implementations

I plan to continue adding and revising features to ISO.
Here are some features that I plan on adding in the near future:

* Likes
* Tags
* Infinite scrolling
