declare namespace Express {
  export interface Request {
    data?: {
      city: string;
      units: string;
      lang: string;
      appId: string;
    };
  }
}

