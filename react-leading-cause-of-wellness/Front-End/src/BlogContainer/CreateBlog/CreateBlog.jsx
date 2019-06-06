import React, {Component} from "react";

class CreateBlog extends Component{
    constructor(){
        super()
        this.state = {
            time:   "",
            email:  "",
            title:  "",
            blog:   ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        console.log("Submitting");
        e.preventDefault();

        await this.setState({
            time: new Date()
        })

        this.props.submitBlog(this.state)
    }

    render(){
        return(
            <div>
            <h1>Creating Blog</h1>
            <form onSubmit={this.handleSubmit}>
                <input name="email" type="text" onChange={this.handleChange}></input>
                <br></br>
                <input name="title" type="text" onChange={this.handleChange}></input>
                <br></br>
                <textarea name="blog" type="text" onChange={this.handleChange}></textarea>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
             </form>
             </div>
        )
    }
}

export default CreateBlog;