import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ShortterLinkService } from '../../services/shortter-link.service';
import { IShooterLink } from '../../interfaces/ShooterLink.interface';

@Component({
  selector: 'app-form-shortter-link',
  templateUrl: './form-shortter-link.component.html',
  styleUrls: ['./form-shortter-link.component.css'],
})
export class FormShortterLinkComponent {

  @Output() shortUrl =new EventEmitter<IShooterLink>();

  url = new FormControl<string>('', [
    Validators.required,
    //validate url is valid http or https
    Validators.pattern(
      '^(https?:\\/\\/)?' + //
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + //
        '((\\d{1,3}\\.){3}\\d{1,3}))' + //
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //
        '(\\?[;&a-z\\d%_.~+=-]*)?' + //
        '(\\#[-a-z\\d_]*)?$'
    ),
  ]);

  form = new FormGroup({
    url: this.url,
  });

  constructor(private shortterLinkService: ShortterLinkService) {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const url = this.form.value.url as string;

    this.shortterLinkService.getShortUrl(url).subscribe((data) => {
      this.shortUrl.emit(data.result);
    });
  }
}
