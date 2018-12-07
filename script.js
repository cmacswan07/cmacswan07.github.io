Vue.component('project-item', {
	props: ['project'],
	template: `
		
	`
})

const app = new Vue({
	el: '#app',
	data: {
		projects: [
			{ name: '/shopping_list/', description: 'A shopping list tool made with Vue JS.', link: './shopping_list/' },
			{ name: '/my_library/', description: 'A tool to help keep track of a library of books.', link: './my_library/' },
			{ name: '/tic_tac_toe/', description: 'Tic-tac-toe game. Vanilla JS.', link: './tic-tac-toe/' },
			{ name: '/calculator/', description: 'Simple calculator. Vanilla JS.', link: './calculator/' },
			{ name: '/etch-a-sketch/', description: 'A browser etch-a-sketch made with vanilla JS.', link: './etch-a-sketch/'}
		]
	}
})