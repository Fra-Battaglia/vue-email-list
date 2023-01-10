const { createApp } = Vue

createApp({
	data() {
		return {
			array_mail: []
		}
	},

	methods: {
		push_mail() {
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then((result) => {
						this.mail = result.data.response,
							this.array_mail.push(this.mail)
					})
			}
		}
	}

}).mount('#app')