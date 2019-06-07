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
            <h1>Create Blog</h1>
            <form onSubmit={this.handleSubmit}>
                email: <input name="email" type="text" className="head" onChange={this.handleChange}></input>
                <br></br>
                Title: <input name="title" type="text" className="head" onChange={this.handleChange}></input>
                <br></br>
                Blog: <textarea name="blog" type="text" id="blog" onChange={this.handleChange}></textarea>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
             </form>
             </div>
        )
    }
}

export default CreateBlog;