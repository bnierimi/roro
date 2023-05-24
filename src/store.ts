import { writable } from "svelte/store";

export const storeList = writable([
	{
		id: 1,
		status: "info",
		request: "ip dashboard",
		response: 'dashboard: : /merry: check <a href="https://nshisho.vercel.app">https://nshisho.vercel.app</a>'
	},
	{
		id: 1,
		status: "error",
		request: "cd /merry",
		response: "neqakyu-navigator: cd: /merry: No such file or directory"
	},
	{
		id: 0,
		status: "success",
		request: "cd /shinku-kyu",
		response: ""
	},
	{
		id: 1,
		status: "info",
		request: "ip dashboard",
		response: 'dashboard: : /merry: check <a href="https://nshisho.vercel.app">https://nshisho.vercel.app</a>'
	},
	{
		id: 1,
		status: "error",
		request: "cd /merry",
		response: "neqakyu-navigator: cd: /merry: No such file or directory"
	},
	{
		id: 0,
		status: "success",
		request: "cd /shinku-kyu",
		response: ""
	},
])