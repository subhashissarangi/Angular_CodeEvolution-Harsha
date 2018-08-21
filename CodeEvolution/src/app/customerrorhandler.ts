import { ErrorHandler, Injectable} from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
  
  handleError(error: any): void {
    throw new Error("Server Error");
  }

}