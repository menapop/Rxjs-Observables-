import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(1, 2, 3, 4).subscribe({
      next: (item) => console.log(item),
      error: (error) => console.log(error),
      complete: () => console.log('stream is completed '),
    });

    from([10, 20, 30]).subscribe({
      next: (item) => console.log(item),
      error: (error) => console.log(error),
      complete: () => console.log('stream is completed '),
    });
  }
}
