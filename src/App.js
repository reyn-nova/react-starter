export function App() {
	const React = require('react')

	require('./App.css')

	const { Emoji } = require('./components/Emoji')

	return (
		<div
			className = 'container'
		>
			<p
				className = "main-text"
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