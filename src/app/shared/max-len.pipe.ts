import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maxLen', pure: false })
export class MaxLenPipe implements PipeTransform {
  transform(text: string, maxLen: number): string {
    return text.length > maxLen ? (text.slice(0, maxLen) + "...") : text; 
  }
}