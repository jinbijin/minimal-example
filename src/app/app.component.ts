import { Component } from '@angular/core';

enum MaybeType {
  Nothing = 0,
  Just = 1
}

interface Nothing {
  type: MaybeType.Nothing;
}

interface Just<T> {
  type: MaybeType.Just;
  value: T;
}

type Maybe<T> = Nothing | Just<T>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  MaybeType = MaybeType;
  maybeText: Maybe<string> = { type: MaybeType.Just, value: 'hello!' };
}
