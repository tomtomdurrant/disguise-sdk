// systemsClient.ts

import { fetchJson, servicePath } from "../client.js";
import createClient from "openapi-fetch";

import {
	detectSystemsResponseSchema,
	systemListProjectsResponseSchema,
} from "./schema.js";
import { paths } from "../../schema.js";

export class SystemsClient {
	private baseUrl: string;
	private client: ReturnType<typeof createClient<paths>>;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.client = createClient<paths>({
			baseUrl: this.baseUrl + "/api/service",
		});
	}

	async getAll() {
		const { data, error } = await this.client.GET("/system/detectsystems");

		return fetchJson(
			`${this.baseUrl}/${servicePath}/system/detectsystems`,
			detectSystemsResponseSchema,
		);
	}

	async listProjects() {
		return this.client.GET("/system/projects");
		return fetchJson(
			`${this.baseUrl}/${servicePath}/system/projects`,
			systemListProjectsResponseSchema,
		);
	}

	async startProject() {
		return this.client.POST("/project/startlocalproject", {
			body: {
				allowUpgrade: true,
				projectPath: "start/start.d3",
				soloMode: false,
			},
		});
	}
}
