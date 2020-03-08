export function MainPage() {
	const React = require('react')

	const { Emoji } = require('../components/Emoji')

	return (
		<div
			className = 'main-page-container'
		>
			<p
				className = 'main-page-text'
			>
				Hello there,
				
				<span>&nbsp;&nbsp;</span>
				
				<Emoji
					symbol = '👋'
				/>

				!
			</p>
		</div>
	)
}