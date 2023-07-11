import { useRouteError } from 'react-router-dom'

export default function AppError() {
	const error = useRouteError() as { message: string }

	return (
		<div>
			<h2>Application Error</h2>
			<span>{error.message}</span>
		</div>
	)
}
