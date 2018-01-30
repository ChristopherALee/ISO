import React from 'react';
import * as PhotosApiUtil from '../../util/photos/photos_api_util';
import { Redirect, withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      imageUrl: "",
      imageFile: null,
      isValid: 'true',
      errors: {},
      submitEnabled: true
    };

    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.image = this.image.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
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

  redirectToProfile() {
    if (this.props.currentUser === this.props.location.pathname.slice(1)) {
      this.props.closeModal();
    } else {
      this.props.closeModal();
      this.props.history.push(`/${this.props.currentUser}`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // disable submit button
    this.setState({['submitEnabled']: false });

    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    if (this.state.imageFile) {
      formData.append('photo[image]', this.state.imageFile);
    }

    let that = this;
    this.props.createPhoto(formData).then(
      (resp) => {
        this.redirectToProfile();
        return resp;
      }
    ).fail(
      (errors) => {
        return (
          this.setState({
            ['errors']: errors.responseJSON,
            ['isValid']: 'false'
          })
        );
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

  titleErrors() {
    if (this.state.errors.title) {
      return (
        this.state.errors.title.map( (error, idx) => {
          return (
            <li key={idx}>* {error}</li>
          );
        })
      );
    }
  }

  imageErrors() {
    if (this.state.errors.image) {
      return (
        this.state.errors.image.map( (error, idx) => {
          return (
            <li key={idx}>* {error}</li>
          );
        })
      );
    }
  }

  loading() {
    if (this.props.uploadLoading) {
      return (
        <div className="loader">Loading...</div>
      );
    } else {
      return (
        null
      );
    }
  }

  toggleSubmitButton() {
    if (this.state.submitEnabled) {
      return (
        <form className='upload-form' ref="btn" onSubmit={this.handleSubmit}>

          {this.loading()}

          <div className='upload-form-image'>
            {this.image()}
            <ul className={'upload-form-image-errors'}>{this.imageErrors()}</ul>
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

          <div className='upload-form-contents'>
            {/* {this.toggleSubmitButton()} */}
            <label htmlFor='submit'>
              <input id="upload-form-submit-button" type='submit' value='Submit'/>
            </label>

            <label htmlFor='upload-form-contents-title'>
              <p>Title</p>
              <input type='text' className={this.state.isValid} value={this.state.title} onChange={this.handleChange('title')}/>
              <ul className={'upload-form-contents-title-errors'}>{this.titleErrors()}</ul>
            </label>

            <label htmlFor='upload-form-contents-description'>
              <p>Description</p>
              <textarea
                onChange={this.handleChange('description')}
              >
              </textarea>
            </label>
          </div>
        </form>
      );
    } else if (!this.state.submitEnabled) {
      return (
        <form className='upload-form' ref="btn">

          {this.loading()}

          <div className='upload-form-image'>
            {this.image()}
            <ul className={'upload-form-image-errors'}>{this.imageErrors()}</ul>
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

          <div className='upload-form-contents'>
            {/* {this.toggleSubmitButton()} */}
            <label htmlFor='submit'>
              <input id="upload-form-submit-button" type='submit' value='Submit' disabled/>
            </label>

            <label htmlFor='upload-form-contents-title'>
              <p>Title</p>
              <input type='text' className={this.state.isValid} value={this.state.title} onChange={this.handleChange('title')}/>
              <ul className={'upload-form-contents-title-errors'}>{this.titleErrors()}</ul>
            </label>

            <label htmlFor='upload-form-contents-description'>
              <p>Description</p>
              <textarea
                onChange={this.handleChange('description')}
              >
              </textarea>
            </label>
          </div>
        </form>
      );
    }
  }

  render() {
    return (
      this.toggleSubmitButton()
    );
  }
}

export default withRouter(UploadForm);
