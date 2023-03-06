Vue.createApp({
    data() {
        return{
            greeting: null,
            message: null
        }
    },
    methods: {
        sayWassup(greeting) {
            if (greeting)
                this.message = "Wassup" + greeting
            else
                this.message = "Yo my g"
        }
    }
}).mount("#app")