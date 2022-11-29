/*
curare l’interfaccia e renderla più carina e/o funzionale;
gestire anche lo stato “done” del task;
far succedere qualcosa al completamento del caricamento dell’applicazione;
*/


const { createApp } = Vue;

createApp({
  data() {
    return {
      error: false,
      newTask: '',
      tasks: [
        {
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ]
    }
  },
  methods: {
    addTask() {
      if (this.newTask.length < 5 || this.newTask === '') {
        this.error = true;
      } else {
        this.tasks.unshift({ text: this.newTask, done: false });
        this.error = false;
      }
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    taskDone(task) {
      task.done = !task.done
    }
  }
}).mount('#app')