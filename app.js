new Vue({
  el: '#tasks',
  
  data: {
  
    tasks: [
      { body: 'go to the store', completed: false}
    ],
    
    newTask: ''
},
  
  filters: {
    
    inProcess: function(tasks){
    
      return tasks.filter(function(tasks) {
        
         return !tasks.completed;
        
      });
    
    }
    
  },
  
  
  methods: {
    
    addTask: function(e) {
      
      e.preventDefault();
      
      this.tasks.push({
      
          body: this.newTask,
          completed:false
      
      });
      
      this.newTask = '';
    
    },
    
    editTask: function(task){
    
      this.removeTask(task);
      
      this.newTask = task.body;
      
      this.$$.newTask.focus();
      
    },
    
    completeTask: function(task){
    
      task.completed = true;
    },
    
    removeTask: function(task) {
    
      this.tasks.$remove(task);
    
    
    }
    
   
  
  }
})