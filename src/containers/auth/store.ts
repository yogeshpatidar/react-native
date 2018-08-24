import { observable } from "mobx"
import { persist } from "mobx-persist"
import { GraphQLClient } from "graphql-request"

export class Auth {
	@persist
	@observable
	isAuth = false

	client: GraphQLClient

	@persist("object")
	@observable
	user = {}

	@observable
	statusReported = false

	constructor() {
		this.client = new GraphQLClient("http://159.65.68.48:4000")
	}

	login = async ({
		email,
		password
	}: {
		email: string
		password: string
	}) => {
		const mutation = `
			mutation Login($email: String!, $password: String!) {
				login(email: $email, password: $password) {
					token
					user {
						name
					}
				}
			}
		`

		const data = await this.client
			.request(mutation, {
				email,
				password
			})
			.catch(console.log)

		console.log({ data })
	}

	signup = async () => {}
}
