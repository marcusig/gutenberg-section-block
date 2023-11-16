import Save from './save-deprecated'
import blockAttributes from './attributes'
export default [
	{
		attributes: lodash.omit(blockAttributes, ['tagName', 'enableSpacing', 'customTextColor']),
		migrate: ( attributes, innerBlocks ) => {
			const newAtts = [
				{
					...attributes,
					tagName: 'section',
					enableSpacing: true,
				}, 
				innerBlocks
			]
			return newAtts
		},

		save: Save,
	}
]