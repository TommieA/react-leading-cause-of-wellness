import React, {Component} from "react";

class ShowBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:  this.props.blog.time,
            email: this.props.blog.email,
            title: this.props.blog.title,
            blog:  this.props.blog.blog
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        showBlog: false
    }


    render(){
        return(
            <div>
                <h1>Show Blog</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="time" type="time" className="head" value={this.state.time} readOnly></input>
                    <br></br>
                    <input name="email" type="text" className="head" value={this.state.email} readOnly></input>
                    <br></br>
                    <input name="title" type="text" className="head" value={this.state.title} readOnly></input>
                    <br></br>
                    <textarea name="blog" type="text" id="blog" value={this.state.blog} readOnly></textarea>
                    <br></br>
                    <input type="submit" value="Return"></input>
                 </form>   
            </div>
        )
    }
}



export default ShowBlog;