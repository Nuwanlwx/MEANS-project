import {Component} from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
    newPost = 'No Content';
    enteredValue = '';
    // constructor(parameters) {
        
    // }
    onAddPost(){
        // alert('Post Added!');
        // console.log(postInput);
        // console.dir(postInput);

        // this.newPost = 'The user\'s post';
        this.newPost = this.enteredValue;
    }
};