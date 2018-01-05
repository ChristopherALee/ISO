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
      errors: []
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
      formData.append('photo[title]', this.state.title);
      formData.append('photo[image]', this.state.imageFile);
    }

    PhotosApiUtil.createPhoto(formData, this.resetForm).then(
      (resp) => {
        return (
          this.props.history.push('/discover')
        );
      }
    ).fail(
      (errors) => {
        // debugger
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
            <li key={idx}>{error}</li>
          );
        })
      );
    }
  }

  render() {

    return (
      <form className='upload-form' onSubmit={this.handleSubmit}>
        <div className='upload-form-image'>
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

        <div className='upload-form-contents'>
          <label for='submit'>
            <input type='submit' value='Submit' />
          </label>

          <label for='upload-form-contents-title'>
            <p>Title</p>
            <input type='text' className={this.state.isValid} value={this.state.title} onChange={this.handleChange('title')}/>
            <ul className={'upload-form-contents-title-errors'}>{this.titleErrors()}</ul>
          </label>

          <label for='upload-form-contents-description'>
            <p>Description</p>
            <textarea
              onChange={this.handleChange('description')}
              value='Tell us more about your photo.'>
            </textarea>
          </label>
        </div>
      </form>
    );
  }
}

export default withRouter(UploadForm);
