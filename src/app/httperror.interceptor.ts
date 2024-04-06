import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("HTTP Request Started");
  return next(req);
};
