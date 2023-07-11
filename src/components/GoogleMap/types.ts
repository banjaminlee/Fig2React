export type MarkedLocation = {
  Name: string;
  Latitude: number;
  Longitude: number;
  OpenCloseStatus: string;
  _id: number;
};

export type PositionProps = {
  lat: number;
  lng: number;
};

export type GoogleMapProps = {
  initialPosition?: PositionProps;
};

export type StoreProps = {
  Name: string;
  Latitude: number;
  Longitude: number;
  OpenCloseStatus: string;
  Attributes: Attribute[];
  Distance: number;
  Address1: string;
  State: string;
  PostCode: string;
  City: string;
};

type Attribute = {
  AttributeDisplayImage: string;
  AttributeDisplayText: string;
  AttributeId: number;
  AttributeName: string;
  AttributeTypeID: number;
  AttributeValue: string;
};
