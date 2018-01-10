import * as PhotosApiUtil from '../../util/photos/photos_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const RECEIVE_SHOW_PHOTO = 'RECEIVE_SHOW_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

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

export const receiveShowPhoto = (photo) => {
  return {
    type: RECEIVE_SHOW_PHOTO,
    photo
  };
};

export const removePhoto = (photo) => {
  return {
    type: REMOVE_PHOTO,
    photoId: photo.id
  };
};

export const receivePhotoErrors = (errors) => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  };
};

export const fetchAllPhotos = () => dispatch => {
  return (
    PhotosApiUtil.fetchAllPhotos().then(
      photos => dispatch(receiveAllPhotos(photos))
    )
  );
};

export const fetchSinglePhoto = (photoId) => dispatch => {
  return (
    PhotosApiUtil.fetchSinglePhoto(photoId).then(
      photo => dispatch(receiveSinglePhoto(photo))
    )
  );
};

export const fetchShowPhoto = (photoId) => dispatch => {
  return (
    PhotosApiUtil.fetchSinglePhoto(photoId).then(
      photo => {
        dispatch(receiveShowPhoto(photo));
        return photo;
      }
    )
  );
};

export const createPhoto = (photo) => dispatch => {
  return (
    PhotosApiUtil.createPhoto(photo).then(
      photo => {
        dispatch(receiveSinglePhoto(photo));
        return photo;
      }
    ).fail(
      errors => {
        dispatch(receivePhotoErrors(errors));
        return errors;
      }
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
