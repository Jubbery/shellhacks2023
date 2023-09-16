import { Component, OnInit, NgZone } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  autocompleteInput!: any;
  queryWait!: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('googlePlacesInput'));

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: any = autocomplete.getPlace();
        if (place.geometry === undefined || place.geometry === null) {
          return;
        } else {
          // Do something with the selected place, e.g.:
          this.autocompleteInput = place.name;
        }
      });
    });
  }
}
