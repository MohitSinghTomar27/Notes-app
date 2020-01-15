import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class NoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title || '',
            body: this.props.body || '',
            category: this.props.category ? this.props.category._id : '',
            categories: props.categories || []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }
        this.props.note && (formData.id = this.props.note._id)
        if(this.state.name){
            this.props.handleSubmit(formData)
        } else {
            this.setState({ nameError : '* Field is required'})
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className='container col-md-6'>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}/>
                        { this.state.nameError ? <p style={{ color: 'red' }} >{ this.state.nameError }</p> : '' }
                </FormGroup> 

                 <FormGroup>
                        <Label for="body">Description</Label>
                        <Input type="textarea" name="body" id="body" value={this.state.body} onChange={this.handleChange}/>
                        { this.state.nameError ? <p style={{color: 'red'}}>{ this.state.nameError }</p> : '' }
                </FormGroup>

                <FormGroup>
                        <Label htmlFor="category">Category</Label>
                        <Input type="select" id="category" value={this.state.category} onChange={this.handleChange} name="category">
                        <option value="">select</option>
                        {this.props.categories.map(category=>{
                             return < option key={category._id} value={category._id}>{category.name}</option>
                        })}
                        </Input>
                        { this.state.nameError ? <p style={{color: 'red'}}>{ this.state.nameError }</p> : '' }
                </FormGroup>
                    <Button type="submit" value="submit">Submit</Button>
                   
                </Form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        note:state.note
    }
}

export default connect(mapStateToProps)(NoteForm)