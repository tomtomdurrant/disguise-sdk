// systemsClient.ts

import { fetchJson, sessionPath } from "../client.js";
import {
	statusGetProjectResponseSchema,
	statusGetSessionResponseSchema,
	statusListHealthResponseSchema,
	statusListNotificationsResponseSchema,
} from "./schema.js";

export class StatusClient {
	private baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}
	async getHealth() {
		return fetchJson(
			`${this.baseUrl}/${sessionPath}/status/health`,
			statusListHealthResponseSchema,
		);
	}

	async getNotifications() {
		return fetchJson(
			`${this.baseUrl}/${sessionPath}/status/notifications`,
			statusListNotificationsResponseSchema,
		);
	}
	async getCurrentProject() {
		return fetchJson(
			`${this.baseUrl}/${sessionPath}/status/project`,
			statusGetProjectResponseSchema,
		);
	}

	async getSessionInfo() {
		return fetchJson(
			`${this.baseUrl}/${sessionPath}/status/session`,
			statusGetSessionResponseSchema,
		);
	}
}
