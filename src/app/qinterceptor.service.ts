import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const kss = localStorage.getItem("LCARS_KEYS");
    if(kss){
      const ks = JSON.parse(kss);
      const pars:any = {};
      for (let k of ks){
        const v = localStorage.getItem(k);
        if(v)
          pars[k] = v;
      } 
      const newReq = req.clone({
        setParams: pars
      });
      return next.handle(newReq);
    } else {
      return next.handle(req);
    }
  }
}
