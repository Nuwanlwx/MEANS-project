import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
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
    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // alert('Post Added!');
        // console.log(postInput);
        // console.dir(postInput);
 
        // this.newPost = 'The user\'s post';
        // this.newPost = this.enteredValue;
        const post: Post = {
            title: form.value.title,
            content: form.value.content,
        };
        this.postCreated.emit(post);
    }
}
