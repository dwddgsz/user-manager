import React, { Component } from 'react'

import Subtitle from '../reusable/Subtitle'
import Filter from '../reusable/Filter'
import UsersList from '../reusable/UsersList'

class Home extends Component {
	state = {
		allData: [],
		filteredData: [],
		searchPhrase: '',
		minAge: 0,
		maxAge: 200,
		error: '',
	}
	componentDidMount() {
		fetch('http://fronttest.ekookna.pl/')
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				this.setState({ allData: res.users })
			})
			.then(() => {
				this.setState({ filteredData: this.state.allData })
			})
			.catch(() => {
				console.log('error')
			})
	}

	handleOnSubmit = (e) => {
		e.preventDefault()
		if (this.state.minAge === '' || this.state.maxAge === '') {
			this.setState({ error: 'age field cannot be empty' })
			return
		}
		if (parseInt(this.state.minAge) > parseInt(this.state.maxAge)) {
			this.setState({ error: 'min age cannot be higher than max age' })
			return
		}
		if (!this.state.searchPhrase.match(/^[a-zA-Z]*$/)) {
			this.setState({
				error: 'search phrase can only contain letters or empty string',
			})
			return
		} else {
			this.setState(
				{
					filteredData: this.state.allData.filter((element) => {
						if (
							parseInt(element.age) >= parseInt(this.state.minAge) &&
							parseInt(element.age) <= parseInt(this.state.maxAge)
						) {
							return element
						} else {
							return null
						}
					}),
				},
				() => {
					this.setState({
						filteredData: this.state.filteredData.filter((element) => {
							if (
								element.last_name
									.toUpperCase()
									.includes(this.state.searchPhrase.toUpperCase())
							) {
								return element
							} else {
								return null
							}
						}),
					})
				}
			)
		}
	}
	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
			error: '',
		})
	}

	render() {
		return (
			<div>
				<Subtitle>Filter Options</Subtitle>
				<Filter
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
					searchPhrase={this.state.searchPhrase}
					minAge={this.state.minAge}
					maxAge={this.state.maxAge}
					error={this.state.error}
				></Filter>
				<UsersList filteredData={this.state.filteredData}></UsersList>
			</div>
		)
	}
}

export default Home
