import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coursesRef: AngularFireList<any>;
  courses$: Observable<any>;
  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list('/courses');
    this.courses$ = this.coursesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key, 
        val: c.payload.val() 
      }));
    });
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement){
    this.coursesRef.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Templates' },
      ]
    });
  }

  update(course) {
    this.coursesRef.update(course.key, {
      title: course.val + ' Updated',
      price: 160
    });
  }
}
