import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  localUrl = 'http://localhost:3000/locations';
  remoteURL =
    'https://my-json-server.typicode.com/asis-shukla/my-ang-app/locations';

  currentURL = this.remoteURL;

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.currentURL);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.currentURL}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
