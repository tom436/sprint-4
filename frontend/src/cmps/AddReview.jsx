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
        // ev.preventDefault()
        this.props.addReview(this.state.reviewToEdit)
    }
    
    render() {
        const {addReview}= this.props
        return (
            <section className="main-section" >
                <h1>this is add review modal</h1>

                <form onSubmit={this.onSubmit}>
                    <input type="number" name="stars" value={this.state.reviewToEdit.stars} onChange={this.handleChange} />
                    <textarea name="txt" onChange={this.handleChange} value={this.state.reviewToEdit.txt}></textarea>
                    <button>Submit</button>
                </form>
            </section >

        )
    }

}