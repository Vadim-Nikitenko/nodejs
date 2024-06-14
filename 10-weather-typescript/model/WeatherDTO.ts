export class WeatherDTO {
  constructor(
      public city: string = "",
      public units: string = "",
      public lang: string = "",
      public appId: string = "",
  ) {}
}