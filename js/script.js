/*
curare l’interfaccia e renderla più carina e/o funzionale;
gestire anche lo stato “done” del task;
far succedere qualcosa al completamento del caricamento dell’applicazione;
*/


const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: 'Fare i compiti', done: false },
        { text: 'Fare la spesa', done: true },
        { text: 'Fare il bucato', done: false }
      ]
    }
  },
  methods: {
  },
}).mount('#app')