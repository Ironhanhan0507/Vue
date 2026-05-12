import { createApp } from "vue"; // 引入的不是Vue构造函数，而是一个名为createApp的工厂函数，这个函数是vue3中创建应用实例的函数，vue2中是new Vue()创建实例
import App from "./App.vue";

/*
    const vm = new Vue({
        render: h => h(App)
    }).$mount("#app")

    上面这段代码是vue2中创建实例的方式，vue3中使用createApp函数创建实例，并且直接调用mount方法挂载到页面上
*/

createApp(App).mount("#app");
/*
    const app = cretaeApp(App);
    app.mount("#app");

    上面这段代码是vue3中创建实例的方式，第一行创建了一个应用实例，第二行将这个实例挂载到页面上。也可以直接链式调用，如上面所示。
    app类似于vm，是vue3中创建的应用实例，vm是vue2中创建的实例。两者的作用相似，都是用来管理整个应用的生命周期和状态的对象。
*/
