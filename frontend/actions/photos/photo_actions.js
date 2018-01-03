import * as PhotosApiUtil from '../../util/photos/photos_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receiveAllPhotos = (photos) => {
  return {
    type: RECEIVE_ALL_PHOTOS,
    photos
  };
};

export const receiveSinglePhoto = (photo) => {
  return {
    type: RECEIVE_SINGLE_PHOTO,
    photo
  };
};

export const removePhoto = (photo) => {
  return {
    type: REMOVE_PHOTO,
    photoId: photo.id
  };
};

export const fetchAllPhotos = () => dispatch => {
  return (
    PhotosApiUtil.fetchAllPhotos().then(
      photos => dispatch(receiveAllPhotos(photos))
    )
  );
};

export const fetchSinglePhoto = (photo) => dispatch => {
  return (
    PhotosApiUtil.fetchSinglePhoto(photo).then(
      photo => dispatch(receiveSinglePhoto(photo))
    )
  );
};

export const createPhoto = (photo) => dispatch => {
  return (
    PhotosApiUtil.createPhoto(photo).then(
      photo => dispatch(receiveSinglePhoto(photo))
    )
  );
};

export const updatePhoto = (photo) => dispatch => {
  return (
    PhotosApiUtil.updatePhoto(photo).then(
      photo => dispatch(receiveSinglePhoto(photo))
    )
  );
};

export const deletePhoto = (photo) => dispatch => {
  return (
    PhotosApiUtil.deletePhoto(photo.id).then(
      (photo) => dispatch(removePhoto(photo))
    )
  );
};
