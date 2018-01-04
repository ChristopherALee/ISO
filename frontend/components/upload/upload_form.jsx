import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { imageUrl: "", imageFile: null };

    this.readFile = this.readFile.bind(this);
  }

  readFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    return (

    );
  }
}

export default UploadForm;
