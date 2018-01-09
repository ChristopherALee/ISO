import React from 'react';

class CoverPhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      imageUrl: "",
      imageFile: null,
      profile_photo: false,
      cover_photo: false,
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
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[profile_photo]', false);
    formData.append('photo[cover_photo]', true);
    if (this.state.imageFile) {
      formData.append('photo[image]', this.state.imageFile);
    }

    let that = this;
    this.props.createPhoto(formData).then(
      (resp) => {
        this.props.closeModal();
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

  render() {
    return (
      null
    );
  }
}

export default CoverPhotoUploadForm;
