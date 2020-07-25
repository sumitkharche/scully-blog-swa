import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.css']
})
export class BlogContainerComponent implements OnInit {

  constructor(private scully: ScullyRoutesService) {}
  posts$: Observable<ScullyRoute[]>;

  ngOnInit(): void {
    this.posts$ = this.scully.available$.pipe(
        map(routeList => {
          return routeList.filter((route: ScullyRoute) =>
            route.route.startsWith(`/blog/`)
          );
        })
      );
    }
}
