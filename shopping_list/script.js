Vue.component('shopping-item', {
	props: ['item'],
	template: `
	<div class="item-row">
		<div class="item">{{ item.item }}</div>
		<div class="price">{{ item.price }}</div>
		<div class="delete"><button class="delete-button" v-on:click=removeItem(item)>Delete</button></div>
	</div>
	`,
	methods: {
		removeItem: function(id) {
			app.removeItem(app.items.indexOf(id))
		},
		testFunction: function(item) {
			app.testFunction(item)
		}
	}
})

const app = new Vue({
	el: '#app',
	data: {
		items: [
		],
		itemValue: '',
		priceValue: '',
		itemTotal: 0
	},
	methods: {
		addItem: function(item, price) {
			this.items.push({ item: item, price: price, id: this.items.length });
			this.itemTotal += Number(price);
			this.itemValue = '';
			this.priceValue = '';
		},
		removeItem: function(index) {
			this.items.splice(index, 1)
		},
		testFunction: function(item) {
			console.log(this.items.indexOf(item))
		}
	}
})