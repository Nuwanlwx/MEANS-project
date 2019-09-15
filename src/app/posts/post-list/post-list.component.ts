import {Component,  OnInit, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

import {Post} from '../post.model';
import { PostService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit , OnDestroy {
    // posts = [
    //     {title: 'First Post', content: 'This is the first post\'s content'},
    //     {title: 'Second Post', content: 'This is the Second post\'s content'},
    //     {title: 'Third Post', content: 'This is the Third post\'s content'}

    // ];
    posts: Post[] = [];
    private postSub: Subscription;
    // postService: PostService;

    constructor(public postsService: PostService) {}

    ngOnInit() {
        this.postsService.getPost();
        this.postSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
}
