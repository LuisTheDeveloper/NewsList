import { combineEpics } from "redux-observable";
import {
  FETCH_NEWS,
  fetchNewsActionSuccess,
  fetchNewsActionFailure,
} from "../actions/index";

import { ofType } from "redux-observable";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { ajax } from "rxjs/internal-compatibility";

const fetchUserEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_NEWS),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(`https://newsapi.org/v2/everything?q=${payload}&apiKey=`)
        .pipe(
          map((response) => fetchNewsActionSuccess(response)),
          catchError((error) => of(fetchNewsActionFailure(error.xhr.response)))
        )
    )
  );

export const rootEpic = combineEpics(fetchUserEpic);
