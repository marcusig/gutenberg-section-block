/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import classnames from 'classnames'
import ResizableBox from 're-resizable'
//  Import CSS.
import './style.scss';
import './editor.scss';

const { isFinite, find, omit } = window.lodash;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	PanelBody, 
	RangeControl,
	withFallbackStyles,
} = wp.components;
const { Fragment, compose } = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	PanelColor,
	withColors,
	getColorClass,
} = wp.editor;

const { getComputedStyle } = window;

const FallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackBackgroundColor: backgroundColor || ! computedStyles ? undefined : computedStyles.backgroundColor,
		// fallbackTextColor: textColor || ! computedStyles ? undefined : computedStyles.color,
		// fallbackFontSize: fontSize || customFontSize || ! computedStyles ? undefined : parseInt( computedStyles.fontSize ) || undefined,
	};
} );
// data-align="full"
const Edit = ( props ) => {
	// Creates a <p class='wp-block-cgb-block-section-block'></p>.
	const {
		attributes,
		setAttributes,
		className,
		setBackgroundColor,
		fallbackBackgroundColor,
		toggleSelection,
	} = props;
	const { backgroundColor, customBackgroundColor, resizeTopIsActive, resizeBottomIsActive } = attributes
	// console.log('bg:', backgroundColor,customBackgroundColor, toggleSelection);
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Spacing' ) }>
					<RangeControl
						label={ __( 'Spacing top' ) }
						value={ attributes.spacingTop }
						onChange={ ( nextSpacing ) => {
							console.log
							setAttributes( {
								spacingTop: nextSpacing,
							} );
						} }
						min={ 0 }
						max={ 200 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Spacing bottom' ) }
						value={ attributes.spacingBottom }
						onChange={ ( nextSpacing ) => {
							setAttributes( {
								spacingBottom: nextSpacing,
							} );
						} }
						min={ 0 }
						max={ 200 }
						step={ 10 }
					/>
				</PanelBody>				
				<PanelColor
					colorValue={ customBackgroundColor }
					initialOpen={ false }
					title={ __( 'Background Color' ) }
					onChange={ ( nextColor, ...whatelse ) => {
						console.log('before:', backgroundColor, whatelse);
						setBackgroundColor( nextColor );
						setAttributes(
							{
								customBackgroundColor: nextColor
							}
						)
						// setBackgroundColor(nextColor)
						console.log('now:', backgroundColor, nextColor);
					} }
				/>
			</InspectorControls>
			<section
				className={ props.className }
				style={ {
					backgroundColor: customBackgroundColor,
				} }
			>
				<ResizableBox
					className={ resizeTopIsActive ? 'resizing': '' }
					size={ {
						height: attributes.spacingTop,
					} }
					minHeight="0"
					handleClasses={ {
						top: 'core-blocks-spacer__resize-handler-top',
						bottom: 'core-blocks-spacer__resize-handler-bottom',
					} }
					enable={ {
						top: true,
						right: false,
						bottom: false,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					} }
					onResizeStop={ ( event, direction, elt, delta ) => {
						setAttributes( {
							resizeTopIsActive: false,
							spacingTop: parseInt( attributes.spacingTop + delta.height, 10 ),
						} );
						toggleSelection( true );
					} }
					onResizeStart={ () => {
						setAttributes( {
							resizeTopIsActive: true,
						} );
						toggleSelection( false );
						console.log(resizeTopIsActive)
					} }
				/>
				<InnerBlocks />
				<ResizableBox
					className={ resizeBottomIsActive ? 'resizing': 'r' }
					size={ {
						height: attributes.spacingBottom,
					} }
					minHeight="0"
					handleClasses={ {
						top: 'core-blocks-spacer__resize-handler-top',
						bottom: 'core-blocks-spacer__resize-handler-bottom',
					} }
					enable={ {
						top: false,
						right: false,
						bottom: true,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					} }
					onResizeStop={ ( event, direction, elt, delta ) => {
						setAttributes( {
							spacingBottom: parseInt( attributes.spacingBottom + delta.height, 10 ),
							resizeBottomIsActive: false
						} );
						toggleSelection( true );
					} }
					onResizeStart={ () => {
						toggleSelection( false );
						setAttributes( {
							resizeBottomIsActive: true,
						} );
					} }
				/>
			</section>
		</Fragment>
	);
}
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'mkl/section-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Section' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'section' ),
		__( 'container' ),
	],
	attributes: {
		spacingTop: {
			type: 'number',
			default: 20
		},
		spacingBottom: {
			type: 'number',
			default: 20
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		backgroundImage: {
			type: 'string',
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: compose( [
		withColors( 'backgroundColor', { textColor: 'color' } ),
		FallbackStyles,
	] )( Edit ), 


	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( { attributes, className }) {
		const { 
			backgroundColor,
			customBackgroundColor,
			spacingBottom,
			spacingTop
		} = attributes;

		const backgroundClass = getColorClass( 'background-color', backgroundColor );
		const classes = classnames(
			{
				className,
				[backgroundClass]: backgroundClass
			}
		)

		const styles = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			paddingBottom: spacingBottom ? spacingBottom : undefined,
			paddingTop: spacingTop ? spacingTop : undefined,

		}

		return (
			<section className={ classes ? classes : undefined } style={ styles }>
				<InnerBlocks.Content />
			</section>
		);
	},

	/**
	 * wrapper props
	 * @param {*} attributes 
	 */
	getEditWrapperProps( attributes ) {
		// const { align } = attributes;
		return { 'data-align': 'full' };
	},
	// migrate( attributes ) {
	// 	return omit( {
	// 		...attributes,
	// 		customBackgroundColor: attributes.backgroundColor && '#' === attributes.backgroundColor[ 0 ] ? attributes.backgroundColor : undefined,
	// 	}, [ 'backgroundColor' ] );
	// },
} );
