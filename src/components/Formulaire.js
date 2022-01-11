import React, { Component } from 'react'


export default class Formulaire extends Component {

    state={
        message:'',
        length:this.props.length
    }

    createMessage=()=>{
        const {addMessage,pseudo,length} =this.props

        const message={
            pseudo,
            message:this.state.message
        }
      
        if(message['message'].length>1){
           addMessage(message)
            
        }
       
         //Reset 
         this.setState({message:'',length})
    }

    handleSubmit=event=>{
        event.preventDefault()
        this.createMessage()
    }

    handleChange=event=>{
        const message=event.target.value
        const length=this.props.length - parseInt(message.length)
       // this.state.message ='' ?  this.props.length : length
        this.setState({message,length})
    }

    handleKeyUp=event=>{
        if(event.key==='Enter'){
            this.createMessage()
        }
    }
    render() {
        return (
            <form
                className='form'
                onSubmit={this.handleSubmit}
            >
                <textarea
                   value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength={this.props.length}
                />
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit'>
                    Envoyer!
                </button>
            </form>
        )
    }
}
