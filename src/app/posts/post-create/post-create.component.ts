import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from '../post.model';
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
    newPost = 'No Content';
    // enteredValue = '';
        enteredContent = '';
        enteredTitle = '';
        @Output() postCreated = new EventEmitter<Post>();
    // constructor(parameters) {
    // }
    onAddPost() {
        // alert('Post Added!');
        // console.log(postInput);
        // console.dir(postInput);
 
        // this.newPost = 'The user\'s post';
        // this.newPost = this.enteredValue;
        const post: Post = {
            title: this.enteredTitle,
            content: this.enteredContent
        };
        this.postCreated.emit(post);
    }
}
