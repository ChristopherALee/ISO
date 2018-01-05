import * as PhotoActions from '../../actions/photos/photo_actions';

export const fetchAllPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: photo
  });
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: photo
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};
