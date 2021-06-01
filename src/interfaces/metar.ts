export interface SpokenValue {
  repr: string;
  value: number;
  spoken: string;
}

export interface Cloud {
  repr: string;
  type: string;
  altitude: number;
  modifier: null;
  direction: null;
}

export interface Meta {
  timestamp: string;
}

export interface RemarksInfo {
  dewpoint_decimal: SpokenValue;
  temperature_decimal: SpokenValue;
}

export interface Time {
  repr: string;
  dt: string;
}

export interface UnitsInfo {
  altimeter: string;
  altitude: string;
  temperature: string;
  visibility: string;
  wind_speed: string;
}

export interface WxCode {
  repr: string;
  value: string;
}

export default interface Metar {
  meta: Meta;
  altimeter: SpokenValue;
  clouds: Cloud[];
  flight_rules: string;
  other: any[];
  sanitized: string;
  visibility: SpokenValue;
  wind_direction: SpokenValue;
  wind_gust: SpokenValue;
  wind_speed: SpokenValue;
  wx_codes: WxCode[];
  raw: string;
  station: string;
  time: Time;
  remarks: string;
  dewpoint: SpokenValue;
  remarks_info: RemarksInfo;
  runway_visibility: any[];
  temperature: SpokenValue;
  wind_variable_direction: any[];
  units: UnitsInfo;
}
