import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(user, delemiter: string = ' ') {
    return user.firstName + delemiter + user.lastName;
  }
}
