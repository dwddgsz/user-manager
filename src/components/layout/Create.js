import React, { Component } from 'react'

import Form from '../reusable/Form'

class Create extends Component {
	state = {
		first_name: '',
		last_name: '',
		street: '',
		postal_code: '',
		city: '',
		age: '',
		message: '',
		success: false,
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
			message: '',
			success: false,
		})
	}

	handleOnSubmit = (e) => {
		e.preventDefault()
		this.setState({ success: false })
		// NO EMPTY SPACES
		if (
			this.state.first_name === '' ||
			this.state.last_name === '' ||
			this.state.age === '' ||
			this.state.street === '' ||
			this.state.city === '' ||
			this.state.age === ''
		) {
			this.setState({ message: 'field cannot be empty' })
			return
		}

		// NO WHITESPACE CHARACTERS
		const regexpNoWhitespace = /^\S*$/
		if (
			!this.state.first_name.match(regexpNoWhitespace) ||
			!this.state.last_name.match(regexpNoWhitespace) ||
			!this.state.postal_code.match(regexpNoWhitespace) ||
			!this.state.street.match(regexpNoWhitespace) ||
			!this.state.city.match(regexpNoWhitespace)
		) {
			this.setState({ message: 'field cannot contain whitespace characters' })
			return
		}

		// ONLY LETTERS
		const regexpLettersOnly = /^[a-zA-Z]+$/
		if (
			!this.state.first_name.match(regexpLettersOnly) ||
			!this.state.last_name.match(regexpLettersOnly) ||
			!this.state.street.match(regexpLettersOnly) ||
			!this.state.city.match(regexpLettersOnly)
		) {
			this.setState({
				message: 'name, street and city fields can only contain letters',
			})
			return
		}

		// REQUEST
		const details = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			street: this.state.street,
			postal_code: this.state.postal_code,
			city: this.state.city,
			age: this.state.age,
		}

		let formBody = []

		for (let property in details) {
			let encodedKey = encodeURIComponent(property)
			let encodedValue = encodeURIComponent(details[property])
			formBody.push(encodedKey + '=' + encodedValue)
		}

		formBody = formBody.join('&')

		fetch('http://fronttest.ekookna.pl/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body: formBody,
		})
			.then(() => {
				this.setState({
					first_name: '',
					last_name: '',
					street: '',
					postal_code: '',
					city: '',
					age: '',
				})
			})
			.then(() => {
				this.setState({ success: true, message: 'success' })
			})
	}

	render() {
		return (
			<Form
				title='Create New User'
				data={this.state}
				handleOnChange={this.handleOnChange}
				handleOnSubmit={this.handleOnSubmit}
			></Form>
		)
	}
}

export default Create
