Vue.component('project-item', {
	props: ['project'],
	template: `
		<p><a v-bind:href="project.link">{{ project.name }}</a>  -  {{ project.description }}</p>		
	`
})

const app = new Vue({
	el: '#app',
	data: {
		projects: [
			{ name: 'To-Do List', description: 'A full stack To-Do list application built with Express, Vue, and MySQL.', link: 'https://todo-app-cmacswan.herokuapp.com/' },
			{ name: 'Shopping List', description: 'A shopping list tool made with Vue JS.', link: './shopping_list/' },
			{ name: 'My Library', description: 'A tool to help keep track of a library of books. Built with vanilla JS.', link: './my_library/' },
			{ name: 'Tic Tac Toe', description: 'Tic-tac-toe game. Vanilla JS.', link: './tic_tac_toe/' },
			{ name: 'Calculator', description: 'Simple calculator. Vanilla JS.', link: './calculator/' },
			{ name: 'Framework', description: 'CSS grid framework.', link: './framework_project/' },
			{ name: 'Etch-A-Sketch', description: 'A browser etch-a-sketch made with vanilla JS.', link: './etch-a-sketch/'}
		]
	}
})