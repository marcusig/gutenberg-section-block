/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import classnames from 'classnames'

const {
	InnerBlocks,
	getColorClassName,
} = wp.editor;

export default ( pp ) => {
	const { attributes, className } = pp;
	const { 
		backgroundColor,
		customTextColor,
		customBackgroundColor,
		spacingBottom,
		spacingTop,
		bgImage,
		bgOptions
	} = attributes;
	const backgroundClass = getColorClassName( 'background-color', backgroundColor );
	const classes = classnames(
		{
			className,
			[backgroundClass]: backgroundClass
		}
	)

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: customTextColor ? customTextColor : undefined,
		paddingBottom: spacingBottom ? spacingBottom : undefined,
		paddingTop: spacingTop ? spacingTop : undefined,
	}

	return (
		<section className={ classes ? classes : undefined } style={ styles }>
			{ !! bgImage && <div
				className={ classnames( 
					'section-bg', {
						'bg__repeated': bgOptions.repeat,
						'bg__stretched': bgOptions.stretch || bgOptions.fixed,
						'bg__fixed': bgOptions.fixed,
					} ) }
				style={ {
					backgroundImage: bgImage ? 'url(' + bgImage.image.url + ')' : undefined,
					opacity: bgOptions.opacity
				} }
			/> }
			<InnerBlocks.Content />
		</section>
	);
}