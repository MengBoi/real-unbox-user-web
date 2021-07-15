import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "./LocationOnIcon";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMap = (props) => {
  const { longitude, latitude } = props;
  return (
    <div style={{ height: 500, width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDY3o5FrlNs-tPWObymrYItbsxPN97F5qo",
        }}
        center={{
          lat: latitude,
          lng: longitude,
        }}
        defaultZoom={15}
      >
        <LocationOnIcon lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
