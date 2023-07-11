import { AppError, Home } from '@pages'

const loader = async function homeLoader(): Promise<String> {
	return Promise.resolve('home loader loaded')
}

const home = {
	element: <Home />,
	errorElement: <AppError />,
	loader,
	path: '/'
}

export default home
