export class ConfigDTO {
    private city: string;
    private units: string;
    private lang: string;
    private appId: string;
    constructor(city: string = '', units: string = '', lang: string = '', appId: string = '') {
        this.city = city;
        this.units = units;
        this.lang = lang;
        this.appId = appId;
    }

    [key: string]: string | undefined;
}