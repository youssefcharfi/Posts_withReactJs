import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Consumer } from './context'

class Post extends Component {

    state = {
        postShowed: true
    }

    showPost = () => {
        this.setState({
            postShowed: !this.state.postShowed
        })
    }

    deletePost = (id,dispatch) => {
        let action = {
            type: 'DELETE_POST',
            payload: id
        }
        dispatch(action)
    }

    render() {
        const { id, user, body } = this.props.data
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="container">
                            <div style={{ borderColor: "darkgray" }} className="card my-2">
                                <div className="card-header">
                                    {user}
                                    <i onClick={this.showPost} style={{ marginLeft: "5px", cursor: "pointer" }} className="fa fa-sort-down"></i>
                                    <i onClick={this.deletePost.bind(this, id, dispatch)} style={{ color: "blackgray", cursor: "pointer", float: "right" }} className="fa fa-times" aria-hidden="true"></i>
                                </div>
                                {this.state.postShowed ?
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>{body}</p>
                                        </blockquote>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}
export default Post