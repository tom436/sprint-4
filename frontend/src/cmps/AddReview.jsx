import React, { Component } from 'react';

export default class Review extends Component {

    state = {
        reviewToEdit: {
            user: 'Guest',
            txt: '',
            stars: 0,
            time:new Date().toLocaleString()
            
        }

    }

    handleChange = (ev) => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            reviewToEdit: {
                ...prevState.reviewToEdit,
                [name]: value
            }
        }))
    }

    onSubmit = (ev)=>{
        this.props.addReview(this.state.reviewToEdit)
    }
    
    render() {
        const {addReview}= this.props
        return (
            <section className="main-section" >
                <h1>this is add review modal</h1>

                <form className="flex column" onSubmit={this.onSubmit}>
                    <textarea className="user-txt" name="txt" onChange={this.handleChange} value={this.state.reviewToEdit.txt}></textarea>
                    <input  className="user-rate" type="number" name="stars" value={this.state.reviewToEdit.stars} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </section >

        )
    }

}