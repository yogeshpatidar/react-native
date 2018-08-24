import { Auth } from "containers/auth/store";

export class ApplicationStore {
	auth = new Auth()
}

export const AppStore = new ApplicationStore()
