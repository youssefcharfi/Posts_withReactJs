import React, { Component } from 'react'

const Context = React.createContext()


const reducer = (state , action) =>{
    switch(action.type){
        case 'DELETE_POST':
             return{
          posts: state.contacts.filter((post) => post.id !== action.payload),
            };
        case 'ADD_POST':
            return{
          posts: [action.payload, ...state.posts]  
            };
        default : 
        return state;
    }
}

export class Provider extends Component {

    state = {
        posts: [
            {
                id: 1,
                user: "youssef",
                body: "hey this is my first post HAHAHAHAHA"
            },
            {
                id: 2,
                user: "adil",
                body: "HOLA TODOS ! "
            },
            {
                id: 3,
                user: "kamal",
                body: "Peace and love <3"
            },
        ],
        dispatch: action => this.setState(state => reducer(state , action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer 