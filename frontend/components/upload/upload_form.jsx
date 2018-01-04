import React from 'react';
import * as PhotosApiUtil from '../../util/photos/photos_api_util';
import { Redirect, withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', imageUrl: "", imageFile: null };
    
    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    );
  }

  render() {
    return (
      <form className='upload-form' onSubmit={this.handleSubmit}>
        <img src={this.state.imageUrl} />

        <input
          type='file'
          accept='.jpg, .jpeg, .png'
          onChange={this.readFile}
          multiple
      />

        <input type='text' value={this.state.title} onChange={this.handleChange('title')}/>
        <input type='submit' value='Upload' />
      </form>
    );
  }
}

export default withRouter(UploadForm);
