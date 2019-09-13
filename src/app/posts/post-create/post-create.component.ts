import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
// import {Post} from '../post.model';
import { PostService } from '../posts.service';

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
    constructor(public postsService: PostService) {

    }
    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // alert('Post Added!');
        // console.log(postInput);
        // console.dir(postInput);
 
        // this.newPost = 'The user\'s post';
        // this.newPost = this.enteredValue;
        // const post: Post = {
        //     title: form.value.title,
        //     content: form.value.content,
        // };
        this.postsService.addPost(form.value.title, form.value.content)
        form.resetForm();
    }
}
