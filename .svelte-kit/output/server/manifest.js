export const manifest = {
	appDir: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"start-19b2f7b9.js","js":["start-19b2f7b9.js","chunks/index-fdde923d.js","chunks/index-991380fe.js","chunks/paths-396f020f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "slot",
				pattern: /^\/slot\/?$/,
				names: [],
				types: [],
				path: "/slot",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "slots",
				pattern: /^\/slots\/?$/,
				names: [],
				types: [],
				path: "/slots",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
