const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { id: 'heading' }, 'Hello'),
		React.createElement('h2', { id: 'heading' }, 'Hello'),
	]),
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { id: 'heading' }, 'Hello'),
		React.createElement('h2', { id: 'heading' }, 'Hello'),
	]),
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { id: 'heading' }, 'Hello'),
		React.createElement('h2', { id: 'heading' }, 'Hello'),
		React.createElement('h3', { id: 'heading' }, 'Hello'),
		React.createElement('h4 ', { id: 'heading' }, 'Hello'),
	]),
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
