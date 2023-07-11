import { useLoaderData } from 'react-router-dom'

export default function Home() {
	const initialData = useLoaderData()

	return (
		<div className="app-content">
			<h2>Home</h2>
		</div>
	)
}
