import React from 'react';

class ProfilePhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: `${this.props.currentUser.username}`,
      imageUrl: "",
      imageFile: null,
    };

    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.image = this.image.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  readFile(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({ imageUrl: reader.result, imageFile: file });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (this.state.imageFile) {
      formData.append('user[profile_photo]', this.state.imageFile);
    }

    let that = this;
    this.props.updateUser(formData, this.props.currentUser.username).then(
      (resp) => {
        this.props.closeModal();
        return resp;
      }
    );
  }

  image() {
    if (this.state.imageUrl) {
      return (
        <div className='uploaded-image-preview'>
          <img src={this.state.imageUrl} />
        </div>
      );
    } else {
      return (
        null
      );
    }
  }

  loading() {
    if (this.props.uploadLoading) {
      return (
        <div className="profile-photo-loader">Loading...</div>
      );
    } else {
      return (
        null
      );
    }
  }

  render() {
    return (
      <form className='profile-photo-upload-form' onSubmit={this.handleSubmit}>
        {this.loading()}

        <div className='profile-photo-upload-form-image'>
          {this.image()}
          <input
            type='submit'
            className='fake-select-photo'
            value='Select Photo'
          />
          <input
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={this.readFile}
            multiple
          />
        </div>

        <div className='profile-photo-upload-form-contents'>
          <label htmlFor='submit'>
            <input type='submit' value='Set Profile Photo' />
          </label>
        </div>
      </form>
    );
  }
}

export default ProfilePhotoUploadForm;
