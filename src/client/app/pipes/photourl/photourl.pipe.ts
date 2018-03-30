import { PipeTransform, Pipe } from "@angular/core";

const IMAGE_BASE_URL = 'assets/images/people';
const DEFAULT_IMAGE_FORMAT = 'jpg';

@Pipe({
    name: 'photourl'
})
class PhotoUrlPipe implements PipeTransform {
    transform(bindingValue: any, imageFormat: string = DEFAULT_IMAGE_FORMAT): string {
        let imageUrl = '';

        if (bindingValue) {
            imageUrl = `${IMAGE_BASE_URL}/Customer${bindingValue}.${imageFormat}`;
        }

        return imageUrl;
    }
}

export default PhotoUrlPipe;
