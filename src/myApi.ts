/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface D3ApiEmptyResponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
}

export interface ProjectStartLocalProjectRequest {
	/**
	 * Path to the Project
	 * Path is relative to the disguise projects folder set in d3Manager, ie: "[project name]/[project file.d3]"
	 */
	projectPath?: string;
	/**
	 * Is machine is running in the solo mode.
	 * Solo mode means that project is running on a standalone machine (not director set), so not as part of a wider session.
	 */
	soloMode?: boolean;
	/**
	 * Allows to force upgrade the project.
	 * This flag only applies if the project being run was created in an older version of D3 and needs to be updated.
	 */
	allowUpgrade?: boolean;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *
 * Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 * Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 *
 * JSON
 *
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface ProtobufAny {
	/**
	 * A URL/resource name that uniquely identifies the type of the serialized
	 * protocol buffer message. This string must contain at least
	 * one "/" character. The last segment of the URL's path must represent
	 * the fully qualified name of the type (as in
	 * `path/google.protobuf.Duration`). The name should be in a canonical form
	 * (e.g., leading "." is not accepted).
	 *
	 * In practice, teams usually precompile into the binary all types that they
	 * expect it to use in the context of Any. However, for URLs which use the
	 * scheme `http`, `https`, or no scheme, one can optionally set up a type
	 * server that maps type URLs to message definitions as follows:
	 *
	 * * If no scheme is provided, `https` is assumed.
	 * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
	 *   value in binary format, or produce an error.
	 * * Applications are allowed to cache lookup results based on the
	 *   URL, or have them precompiled into a binary to avoid any
	 *   lookup. Therefore, binary compatibility needs to be preserved
	 *   on changes to types. (Use versioned type names to manage
	 *   breaking changes.)
	 *
	 * Note: this functionality is not currently available in the official
	 * protobuf release, and it is not used for type URLs beginning with
	 * type.googleapis.com.
	 *
	 * Schemes other than `http`, `https` (or the empty scheme) might be
	 * used with implementation specific semantics.
	 */
	type_url?: string;
	/**
	 * Must be a valid serialized protocol buffer of the above specified type.
	 * @format byte
	 */
	value?: string;
}

/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface RpcStatus {
	/**
	 * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
	 * @format int32
	 */
	code?: number;
	/**
	 * A developer-facing error message, which should be in English. Any
	 * user-facing error message should be localized and sent in the
	 * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
	 */
	message?: string;
	/**
	 * A list of messages that carry the error details.  There is a common set of
	 * message types for APIs to use.
	 */
	details?: ProtobufAny[];
}

/** @default "BPModel_Unknown" */
export type SystemAPIBPModel = "BPModel_Unknown" | "BPv1" | "BPv2" | "NoBP";

/** @default "RGB" */
export type SystemAPIColorFormat =
	| "RGB"
	| "YUV444"
	| "YUV422"
	| "YUV420"
	| "ColorFormat_Unknown";

/** @default "Generation_Unknown" */
export type SystemAPIVFCGeneration =
	| "Generation_Unknown"
	| "One"
	| "Two"
	| "None";

export interface SystemD3VersionInfo {
	/**
	 * Major Version
	 * @format int64
	 */
	major?: number;
	/**
	 * Minor Version
	 * @format int64
	 */
	minor?: number;
	/**
	 * Patch Version (Double dot version)
	 * @format int64
	 */
	hotfix?: number;
	/**
	 * Revision from Mercurial
	 * @format int64
	 */
	revision?: number;
}

export interface SystemDetectSystemsResponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
	/** Information about all systems on the network */
	result?: SystemSystemInfo[];
}

export interface SystemGPUOutputInfo {
	/**
	 * GPU port
	 * @format int64
	 */
	gpuPort?: number;
	/** Genlock state */
	genlockState?: SystemGenlockState;
	/** Is passive dongle */
	emulated?: boolean;
	/** Resolution */
	resolution?: SystemResolution;
	/**
	 * Refresh rate
	 * @format float
	 */
	refreshRate?: number;
	/**
	 * Bit depth
	 * @format int64
	 */
	bitDepth?: number;
	/** RGB/YUV444/YUV422/YUV420 */
	colourFormat?: SystemAPIColorFormat;
}

export interface SystemGPUOutputsInfo {
	/** Machine host name */
	hostname?: string;
	/** Genlock */
	genlock?: SystemGenlockInfo;
	/** Information about all gpu outputs in the system */
	gpuOutputs?: SystemGPUOutputInfo[];
}

export interface SystemGenlockInfo {
	/**
	 * Genlock frequency
	 * @format float
	 */
	frequency?: number;
}

/** @default "FreeRun" */
export type SystemGenlockState =
	| "FreeRun"
	| "Internal"
	| "External"
	| "GenlockState_Unknown";

export interface SystemGetGPUOutputsReponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
	/** Information about all gpu outputs on the network */
	result?: SystemGPUOutputsInfo[];
}

export interface SystemGetNetworkAdaptersResponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
	/** Information about all net adapters on the network */
	result?: SystemNetAdapterInSystemsInfo[];
}

export interface SystemGetVFCsResponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
	/** Information about all vfcs on the network */
	result?: SystemVFCInfo[];
}

/** @default "IPv4" */
export type SystemIPFamily = "IPv4" | "IPv6";

export interface SystemIpAddressInfo {
	/** v4 address */
	address?: string;
	subnet?: string;
	family?: SystemIPFamily;
	/** Default gateway of the network adapter */
	gateway?: string;
}

export interface SystemListProjectsResponse {
	/**
	 * the execution status info
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 *
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	status?: RpcStatus;
	/** Information about all project on the network */
	result?: SystemProjectsInSystemInfo[];
}

export interface SystemNetAdapterInSystemsInfo {
	/** Machine host name */
	hostname?: string;
	/** Information about all net adapters in the system */
	netAdapters?: SystemNetAdapterInfo[];
}

export interface SystemNetAdapterInfo {
	/** Adapter name */
	name?: string;
	/** Mac-address */
	mac?: string;
	/** is adapter enabled */
	enabled?: boolean;
	/** is using DHCP */
	dhcp?: boolean;
	/** Operatioal Status of the Adapter (see operStatusString) */
	status?: SystemOperationalStatus;
	/** IP addresses */
	addresses?: SystemIpAddressInfo[];
}

/** @default "OperationalStatus_Unknown" */
export type SystemOperationalStatus =
	| "OperationalStatus_Unknown"
	| "Up"
	| "Down"
	| "Testing"
	| "Dormant"
	| "NotPresent"
	| "LowerLayerDown";

export interface SystemProjectInfo {
	/** Full path of the project */
	path?: string;
	/** Last modified date of d3 project file e.g. 2019-09-07T15:50+00Z */
	lastModified?: string;
	/** Project version */
	version?: SystemD3VersionInfo;
}

export interface SystemProjectsInSystemInfo {
	/** Machine host name */
	hostname?: string;
	/** Last project name */
	lastProject?: string;
	/** Information about all projects in the system */
	projects?: SystemProjectInfo[];
}

export interface SystemResolution {
	/**
	 * width in pixel, can be 0
	 * @format int64
	 */
	width?: number;
	/**
	 * height in pixel, can be 0
	 * @format int64
	 */
	height?: number;
}

export interface SystemSystemInfo {
	/** Machine host name */
	hostname?: string;
	/** Machine model */
	type?: string;
	/** Installed d3 version */
	version?: SystemD3VersionInfo;
	/** Currently running designer project */
	runningProject?: string;
	/** IP Address (IPV4) */
	ipAddress?: string;
	/** is d3.exe running */
	isDesignerRunning?: boolean;
	/** is d3service.exe running */
	isServiceRunning?: boolean;
	/** is d3manager.exe running */
	isManagerRunning?: boolean;
	/** is notch_host.exe running */
	isNotchHostRunning?: boolean;
}

export interface SystemVFCCard {
	/**
	 * Slot
	 * @format int64
	 */
	slot?: number;
	/** VFC card type */
	type?: SystemVFCType;
	/** Firmware Version, can be 0.0.0 */
	firmwareVersion?: string;
	/** FPGA Version, can be 0.0.0 */
	fpgaVersion?: string;
	/** Split mode */
	splitMode?: SystemVFCSplitMode;
	/** Card Generation */
	generation?: SystemAPIVFCGeneration;
	/** VFC ports */
	ports?: SystemVFCPorts;
}

export interface SystemVFCInfo {
	/** Machine host name */
	hostname?: string;
	/** Back plane version */
	backplaneVersion?: SystemAPIBPModel;
	/** VFC Card */
	cards?: SystemVFCCard[];
}

export interface SystemVFCPort {
	/** VFC port resolution */
	resolution?: SystemResolution;
	/**
	 * VFC port refresh rate, can be 0
	 * @format float
	 */
	RefreshRate?: number;
	/** VFC port name */
	name?: string;
}

export interface SystemVFCPorts {
	a?: SystemVFCPort;
	b?: SystemVFCPort;
	c?: SystemVFCPort;
	d?: SystemVFCPort;
}

/** @default "SplitMode_Unknown" */
export type SystemVFCSplitMode =
	| "SplitMode_Unknown"
	| "Mirror"
	| "Dual"
	| "Quad"
	| "Quad4K"
	| "NoSwizzle";

/** @default "VFCType_Unknown" */
export type SystemVFCType =
	| "VFCType_Unknown"
	| "Mock"
	| "DP_Passthrough"
	| "DP12_Passthrough"
	| "DP14_Passthrough"
	| "QuadDVI"
	| "QuadSDI"
	| "HDMI"
	| "IP"
	| "NoVFC";

export namespace Project {
	/**
	 * No description
	 * @tags Project
	 * @name ProjectForceQuitLocalProject
	 * @summary Force quit an active disguise project
	 * @request POST:/project/forcequitlocalproject
	 * @response `200` `D3ApiEmptyResponse` A successful response.
	 */
	export namespace ProjectForceQuitLocalProject {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = D3ApiEmptyResponse;
	}

	/**
	 * No description
	 * @tags Project
	 * @name ProjectQuitLocalProject
	 * @summary Quit an active disguise project
	 * @request POST:/project/quitlocalproject
	 * @response `200` `D3ApiEmptyResponse` A successful response.
	 */
	export namespace ProjectQuitLocalProject {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = D3ApiEmptyResponse;
	}

	/**
	 * No description
	 * @tags Project
	 * @name ProjectRestartLocalProject
	 * @summary Restart an active disguise project
	 * @request POST:/project/restartlocalproject
	 * @response `200` `D3ApiEmptyResponse` A successful response.
	 */
	export namespace ProjectRestartLocalProject {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = D3ApiEmptyResponse;
	}

	/**
	 * No description
	 * @tags Project
	 * @name ProjectStartLocalProject
	 * @summary Start a disguise project
	 * @request POST:/project/startlocalproject
	 * @response `200` `D3ApiEmptyResponse` A successful response.
	 */
	export namespace ProjectStartLocalProject {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ProjectStartLocalProjectRequest;
		export type RequestHeaders = {};
		export type ResponseBody = D3ApiEmptyResponse;
	}
}

export namespace System {
	/**
	 * No description
	 * @tags System
	 * @name SystemDetectSystems
	 * @summary List all remote machines and local machine system info
	 * @request GET:/system/detectsystems
	 * @response `200` `SystemDetectSystemsResponse` A successful response.
	 */
	export namespace SystemDetectSystems {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SystemDetectSystemsResponse;
	}

	/**
	 * No description
	 * @tags System
	 * @name SystemGetGpuOutputs
	 * @summary List all GPU Output (only works on d3 machine)
	 * @request GET:/system/gpuoutputs
	 * @response `200` `SystemGetGPUOutputsReponse` A successful response.
	 */
	export namespace SystemGetGpuOutputs {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SystemGetGPUOutputsReponse;
	}

	/**
	 * No description
	 * @tags System
	 * @name SystemGetNetworkAdapters
	 * @summary List all Network Adapters
	 * @request GET:/system/networkadapters
	 * @response `200` `SystemGetNetworkAdaptersResponse` A successful response.
	 */
	export namespace SystemGetNetworkAdapters {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SystemGetNetworkAdaptersResponse;
	}

	/**
	 * No description
	 * @tags System
	 * @name SystemListProjects
	 * @summary List all projects
	 * @request GET:/system/projects
	 * @response `200` `SystemListProjectsResponse` A successful response.
	 */
	export namespace SystemListProjects {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SystemListProjectsResponse;
	}

	/**
	 * No description
	 * @tags System
	 * @name SystemGetVfCs
	 * @summary List all VFC Cards
	 * @request GET:/system/vfcs
	 * @response `200` `SystemGetVFCsResponse` A successful response.
	 */
	export namespace SystemGetVfCs {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SystemGetVFCsResponse;
	}
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<
	FullRequestParams,
	"body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
	securityWorker?: (
		securityData: SecurityDataType | null,
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
	extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = "application/json",
	FormData = "multipart/form-data",
	UrlEncoded = "application/x-www-form-urlencoded",
	Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = "/api/service";
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
		fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: "same-origin",
		headers: {},
		redirect: "follow",
		referrerPolicy: "no-referrer",
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter(
			(key) => "undefined" !== typeof query[key],
		);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key),
			)
			.join("&");
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : "";
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === "object" || typeof input === "string")
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== "string"
				? JSON.stringify(input)
				: input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === "object" && property !== null
							? JSON.stringify(property)
							: `${property}`,
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
	};

	protected mergeRequestParams(
		params1: RequestParams,
		params2?: RequestParams,
	): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		};
	}

	protected createAbortSignal = (
		cancelToken: CancelToken,
	): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData
						? { "Content-Type": type }
						: {}),
				},
				signal:
					(cancelToken
						? this.createAbortSignal(cancelToken)
						: requestParams.signal) || null,
				body:
					typeof body === "undefined" || body === null
						? null
						: payloadFormatter(body),
			},
		).then(async (response) => {
			const r = response.clone() as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) {
				throw data;
			}
			return data;
		});
	};
}

/**
 * @title d3 API
 * @version 2.0.0
 * @baseUrl /api/service
 */
export class Api<
	SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
	project = {
		/**
		 * No description
		 *
		 * @tags Project
		 * @name ProjectForceQuitLocalProject
		 * @summary Force quit an active disguise project
		 * @request POST:/project/forcequitlocalproject
		 * @response `200` `D3ApiEmptyResponse` A successful response.
		 */
		projectForceQuitLocalProject: (params: RequestParams = {}) =>
			this.request<D3ApiEmptyResponse, any>({
				path: `/project/forcequitlocalproject`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Project
		 * @name ProjectQuitLocalProject
		 * @summary Quit an active disguise project
		 * @request POST:/project/quitlocalproject
		 * @response `200` `D3ApiEmptyResponse` A successful response.
		 */
		projectQuitLocalProject: (params: RequestParams = {}) =>
			this.request<D3ApiEmptyResponse, any>({
				path: `/project/quitlocalproject`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Project
		 * @name ProjectRestartLocalProject
		 * @summary Restart an active disguise project
		 * @request POST:/project/restartlocalproject
		 * @response `200` `D3ApiEmptyResponse` A successful response.
		 */
		projectRestartLocalProject: (params: RequestParams = {}) =>
			this.request<D3ApiEmptyResponse, any>({
				path: `/project/restartlocalproject`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Project
		 * @name ProjectStartLocalProject
		 * @summary Start a disguise project
		 * @request POST:/project/startlocalproject
		 * @response `200` `D3ApiEmptyResponse` A successful response.
		 */
		projectStartLocalProject: (
			body: ProjectStartLocalProjectRequest,
			params: RequestParams = {},
		) =>
			this.request<D3ApiEmptyResponse, any>({
				path: `/project/startlocalproject`,
				method: "POST",
				body: body,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	system = {
		/**
		 * No description
		 *
		 * @tags System
		 * @name SystemDetectSystems
		 * @summary List all remote machines and local machine system info
		 * @request GET:/system/detectsystems
		 * @response `200` `SystemDetectSystemsResponse` A successful response.
		 */
		systemDetectSystems: (params: RequestParams = {}) =>
			this.request<SystemDetectSystemsResponse, any>({
				path: `/system/detectsystems`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags System
		 * @name SystemGetGpuOutputs
		 * @summary List all GPU Output (only works on d3 machine)
		 * @request GET:/system/gpuoutputs
		 * @response `200` `SystemGetGPUOutputsReponse` A successful response.
		 */
		systemGetGpuOutputs: (params: RequestParams = {}) =>
			this.request<SystemGetGPUOutputsReponse, any>({
				path: `/system/gpuoutputs`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags System
		 * @name SystemGetNetworkAdapters
		 * @summary List all Network Adapters
		 * @request GET:/system/networkadapters
		 * @response `200` `SystemGetNetworkAdaptersResponse` A successful response.
		 */
		systemGetNetworkAdapters: (params: RequestParams = {}) =>
			this.request<SystemGetNetworkAdaptersResponse, any>({
				path: `/system/networkadapters`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags System
		 * @name SystemListProjects
		 * @summary List all projects
		 * @request GET:/system/projects
		 * @response `200` `SystemListProjectsResponse` A successful response.
		 */
		systemListProjects: (params: RequestParams = {}) =>
			this.request<SystemListProjectsResponse, any>({
				path: `/system/projects`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags System
		 * @name SystemGetVfCs
		 * @summary List all VFC Cards
		 * @request GET:/system/vfcs
		 * @response `200` `SystemGetVFCsResponse` A successful response.
		 */
		systemGetVfCs: (params: RequestParams = {}) =>
			this.request<SystemGetVFCsResponse, any>({
				path: `/system/vfcs`,
				method: "GET",
				format: "json",
				...params,
			}),
	};
}
