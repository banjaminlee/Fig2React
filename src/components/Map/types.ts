export type MarkedLocation = {
  name: string;
  latitude: number;
  longitude: number;
  _id: number;
};

export type MapProps = {
  viewport: ViewportProps;
};

export type ViewportProps = {
  latitude: number;
  longitude: number;
  zoom: number;
  transitionDuration: number;
};
