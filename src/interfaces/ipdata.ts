export interface IPResponse {
    ip:         string;
    type?:       string;
    hostname?:   null;
    carrier?:    Carrier;
    company?:    Company;
    connection?: Connection;
    currency?:   Currency;
    location?:   Location;
    security?:   { [key: string]: boolean };
    time_zone?:  TimeZone;
}

export interface Carrier {
    name: null;
    mcc:  null;
    mnc:  null;
}

export interface Company {
    domain: string;
    name:   string;
    type:   string;
}

export interface Connection {
    asn:          number;
    domain:       string;
    organization: string;
    route:        string;
    type:         string;
}

export interface Currency {
    code:          string;
    name:          string;
    name_native:   string;
    plural:        string;
    plural_native: string;
    symbol:        string;
    symbol_native: string;
    format:        Format;
}

export interface Format {
    negative: Tive;
    positive: Tive;
}

export interface Tive {
    prefix: string;
    suffix: string;
}

export interface Location {
    continent: Continent;
    country:   Country;
    region:    Continent;
    city:      string;
    postal:    string;
    latitude:  number;
    longitude: number;
    language:  Language;
    in_eu:     boolean;
}

export interface Continent {
    code: string;
    name: string;
}

export interface Country {
    area:               number;
    borders:            string[];
    calling_code:       string;
    capital:            string;
    code:               string;
    name:               string;
    population:         number;
    population_density: number;
    flag:               Flag;
    languages:          Language[];
    tld:                string;
}

export interface Flag {
    emoji:         string;
    emoji_unicode: string;
    emojitwo:      string;
    noto:          string;
    twemoji:       string;
    wikimedia:     string;
}

export interface Language {
    code:   string;
    name:   string;
    native: string;
}

export interface TimeZone {
    id:                 string;
    abbreviation:       string;
    current_time:       Date;
    name:               string;
    offset:             number;
    in_daylight_saving: boolean;
}
