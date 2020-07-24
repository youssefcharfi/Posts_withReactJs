import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Consumer } from './context'
import {uuid} from 'uuid'

export default class AddPost extends Component {

    state = {
        user: "",
        body: ""
    }

    getData = async (e) => {
       await this.setState({ [e.target.name]: e.target.value })
    }


    submit = (dispatch,length,e) => { 
        e.preventDefault()
        const { user , body } = this.state
        const newPost = {
            id: length+1,
            user,
            body
        };

        dispatch({
             type: 'ADD_POST',
            payload: newPost
        });
        
        this.setState({
            user: "",
            body: ""
        })

        //this.props.history('/#posts')
    }

    render() {
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value ;
                    const {length} = value.posts
                    return(
            <div id="addPost" className="card my-5" style={{ borderColor: "#FFA233", border: "solid" }}>
                <center><span className="badge badge-warning my-5" >Don't be shy, share with us what u think...!</span></center>
                <div className='card container mx-8 my-2'>
                    <form onSubmit={this.submit.bind(this,dispatch,length)}>
                        <div className="form-group">
                            <label htmlFor="user">UserName:</label>
                            <input id="user" name="user" type="text" className="form-control" onKeyUp={this.getData} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Post here</label>
                            <input id="body" name="body" type="text" className="form-control" onKeyUp={this.getData} />
                        </div>
                        <button className="btn btn-block btn-secondary">Add Post</button>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
                }

                }
            </Consumer>
        )
        
    }
}
