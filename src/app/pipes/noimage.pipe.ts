import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: string): string {

    if (image.indexOf('null') > -1) {
        return 'assets/images/noimage.png';
    } else {
      return image;
    }


  }

}
