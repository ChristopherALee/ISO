import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      photo_id: this.props.currentPhoto.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({comment: this.state});
    this.setState({['body']: ""});
  }

  render() {
    return (
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <i className="fa fa-lg fa-comments" aria-hidden="true"></i>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange('body')}
           />

           <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
