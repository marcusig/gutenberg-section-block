import Save from './save-deprecated'
import blockAttributes from './attributes'
import { omit } from 'lodash'
export default [
	{
		attributes: omit(blockAttributes, ['tagName', 'enableSpacing', 'customTextColor']),
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