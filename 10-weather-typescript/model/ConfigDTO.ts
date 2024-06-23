export class ConfigDTO {
  constructor(
    private city: string = "",
    private units: string = "",
    private lang: string = "",
    private appId: string = "",
  ) {}
}