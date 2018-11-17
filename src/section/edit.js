/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import classnames from 'classnames'
import ResizableBox from 're-resizable'
import Section from './section-tag'

const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	PanelBody, 
	RangeControl,
	Button, 
	ResponsiveWrapper,
	ToggleControl,
	SelectControl,
} = wp.components;
const { Fragment } = wp.element;

const {
	InspectorControls,
	InspectorAdvancedControls,
	InnerBlocks,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;

export default ( props ) => {
	const {
		attributes,
		setAttributes,
		setBackgroundColor,
		toggleSelection,
	} = props;

	const onSelectBgImage = ( media ) => {
		setAttributes( {
			bgImage: {
				id: media.id,
				image: media.sizes.large || media.sizes.full,
			}
		} )
	}

	const onRemoveBgImage = () => {
		setAttributes( {
			bgImage: null
		} )
	}

	const { tagName, customBackgroundColor, customTextColor, resizeTopIsActive, resizeBottomIsActive, bgImage, bgOptions, enableSpacing } = attributes

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Spacing' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Enable spacing' ) }
						checked={ !! attributes.enableSpacing }
						onChange={ ( nextEnableSpacing ) => {
							setAttributes( {
								enableSpacing: nextEnableSpacing,
							} );
						} }
					/>

					{ !! enableSpacing && <RangeControl
							label={ __( 'Spacing top' ) }
							value={ attributes.spacingTop }
							onChange={ ( nextSpacing ) => {
								setAttributes( {
									spacingTop: nextSpacing,
								} );
							} }
							min={ 0 }
							max={ 200 }
							step={ 10 }
						/>
					}
					{ !! enableSpacing && <RangeControl
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
					}
				</PanelBody>
				<PanelBody
					title={ __( 'Background image' ) }
					initialOpen={ false }
				>
					{ ! bgImage &&
						<div>
							<MediaUpload
								title={ __('Set background image') }
								onSelect={ onSelectBgImage }
								allowedTypes={["image"]}
								modalClass="editor-post-featured-image__media-modal"
								render={ ( { open } ) => (
									<Button className="editor-post-featured-image__toggle" onClick={ open }>
										{ __( 'Set background image' ) }
									</Button>
								) }
							/>
						</div>
					}
					{ !! bgImage && <MediaUpload
						title={ __( 'Set background image' ) }
						onSelect={ onSelectBgImage }
						allowedTypes={["image"]}
						value={ bgImage.id }
						modalClass="editor-post-featured-image__media-modal"
						render={ ( { open } ) => (
							<div className="editor-bg-image">
								<Button className="editor-post-featured-image__preview" onClick={ open }>
									<ResponsiveWrapper
										naturalWidth={ bgImage.image.width }
										naturalHeight={ bgImage.image.height }
									>
										<img src={ bgImage.image.url } alt={ __( 'BG Image' ) } />
									</ResponsiveWrapper>
								</Button>
								<Button onClick={ open } isDefault isLarge>
									{ __( 'Replace image' ) }
								</Button>
								<Button onClick={ onRemoveBgImage } isLink isDestructive>
									{ __('Remove background image') }
								</Button>
							</div>
						) }
					/>
					}
					{ !! bgImage && <div className="section-bg-settings">
						<RangeControl
							label={ __( 'Opacity' ) }
							value={ bgOptions.opacity * 100 }
							onChange={ ( nextOpacity ) => {
								setAttributes( {
									bgOptions: {
										...bgOptions,
										opacity: nextOpacity / 100,
									},
								} );
							} }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
						<ToggleControl
							label={ __( 'Fixed Background' ) }
							checked={ !! bgOptions.fixed }
							onChange={ ( nextFixed ) => {
								setAttributes( {
									bgOptions: {
										...bgOptions,
										fixed: nextFixed,
									},
								} );
							} }
						/>
						{ ! bgOptions.fixed && <ToggleControl
								label={ __( 'Stretch Background' ) }
								checked={ !! bgOptions.stretch }
								onChange={ ( nextStretch ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											stretch: nextStretch,
										},
									} );
								} }
							/>
						}
						{ ( ! bgOptions.fixed && ! bgOptions.stretch )  && <ToggleControl
								label={ __( 'Repeat Background' ) }
								checked={ !! bgOptions.repeat }
								onChange={ ( nextRepeat ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											repeat: nextRepeat,
										},
									} );
								} }
							/>
						}
					</div>}
				</PanelBody>
				<PanelColorSettings
					initialOpen={ false }
					title={ __( 'Colors' ) }
					colorSettings={[
						{
							label: __( 'Background Color' ),
							value: customBackgroundColor,
							onChange: ( nextBgColor, ...whatelse ) => {
								setBackgroundColor( nextBgColor );
								setAttributes(
									{
										customBackgroundColor: nextBgColor
									}
								)
							}
						},
						{
							label: __( 'Text Color' ),
							value: customTextColor,
							onChange: ( nextColor, ...whatelse ) => {
								setAttributes(
									{
										customTextColor: nextColor
									}
								)
							}
						}						
					]}
				/>
			</InspectorControls>
			<InspectorAdvancedControls>
				<SelectControl
					label="Tag"
					value={ tagName }
					options={ [
						{ label: 'section', value: 'section' },
						{ label: 'header', value: 'header' },
						{ label: 'footer', value: 'footer' },
						{ label: 'div', value: 'div' },
					] }
					onChange={ ( tagName ) => { setAttributes( { tagName } ) } }				
				/>
			</InspectorAdvancedControls>
			<Section
				tagName={tagName}
				className={ props.className }
				style={ {
					backgroundColor: customBackgroundColor,
					color: customTextColor,
				} }
			>
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
				{ !! enableSpacing &&
					<ResizableBox
						className={ classnames( 'spacing-box', { 'resizing': resizeTopIsActive } ) }
						size={ {
							height: attributes.spacingTop,
						} }
						minHeight="0"
						handleClasses={ {
							top: 'core-blocks-spacer__resize-handler-top',
							bottom: 'core-blocks-spacer__resize-handler-bottom components-resizable-box__handle',
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
						} }
					/>
				}
				<InnerBlocks />
				{ !! enableSpacing && <ResizableBox
						className={ classnames( 'spacing-box', { 'resizing': resizeBottomIsActive } ) }
						size={ {
							height: attributes.spacingBottom,
						} }
						minHeight="0"
						handleClasses={ {
							top: 'core-blocks-spacer__resize-handler-top',
							bottom: 'core-blocks-spacer__resize-handler-bottom components-resizable-box__handle',
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
				}
			</Section>
		</Fragment>
	);
}