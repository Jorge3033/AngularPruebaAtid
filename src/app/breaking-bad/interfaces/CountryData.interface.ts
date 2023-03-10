export interface CountryData {
  status:        string;
  "status-code": number;
  version:       string;
  access:        string;
  data:          Data;
}

export interface Data {
  [key: string]: Country;
}

export interface Country {
  country: string;
  region:  string;
}