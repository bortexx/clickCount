import { PING } from "./clicker-types";
import { ofType } from "redux-observable";
import { mapTo, bufferTime } from "rxjs/operators";
import { bufferCount } from "rxjs/operators";
import { pong } from "./action-creators";
import { delay } from "rxjs/operators";

let cont = 0;
export const pingEpic = action$ =>
  action$.pipe(
    ofType(PING),
    bufferTime(1000),
    mapTo(pong())
  );

export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case "PING":
      cont = cont + 1;
      console.log(cont);
      return { isPinging: true };
    case "PONG":
    cont = 0;
      return { isPinging: false };
    default:
      return state;
  }
};
