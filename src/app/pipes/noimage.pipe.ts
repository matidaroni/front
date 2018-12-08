import { Pipe, PipeTransform } from '@angular/core';
import { APIURL } from '../services/apiUrl';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {

    if (image === '') {
        return 'assets/images/noimage.png';
    } else {
      return APIURL.urlPublic + image;
    }


  }

}
