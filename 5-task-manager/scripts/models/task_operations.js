// CRUD

import Task from './task.js';

const taskOperations = {
    
    tasks:[],

    add(id, name, description, date) {

        const task = new Task(id, name, description, date);
        this.tasks.push(task);
        // console.log("Added", task);

        return task;
    },

    mark(id) {

        for(let index = 0; index < this.tasks.length; index++) {

            if(this.tasks[index].id == id) {

                let taskObject = this.tasks[index];
                taskObject.isMarked = !taskObject.isMarked;
            }
        }
    },

    countMarked() {

        let count = 0;

        for(let i = 0; i < this.tasks.length; i++) {

            if(this.tasks[i].isMarked) {

                count++;
            }
        }

        return count;
    },

    countUnmarked() {

        return this.tasks.length - this.countMarked();
    }
};

export default taskOperations;