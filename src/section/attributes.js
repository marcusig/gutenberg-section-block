export default {
	tagName: {
		type: 'string',
		default: 'section',
	},
	enableSpacing: {
		type: 'boolean',
		default: false
	},
	spacingTop: {
		type: 'number',
		default: 60
	},
	spacingBottom: {
		type: 'number',
		default: 60
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	bgImage: {
		type: 'object',
		default: null,
	},
	bgOptions: {
		type: 'object',
		default: {
			repeat: false,
			stretch: true,
			fixed: false,
			opacity: 0.5,
		}
	},
}