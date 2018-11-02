import {Injectable} from '@angular/core';

@Injectable()
export class AppStateService {
  state: any = {};

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  updateState(diff) {
    this.state = {
      ...this.state,
      ...diff
    };
  }
}
