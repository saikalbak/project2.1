import React, { useEffect, useRef } from 'react';

function Map({ mapLink, width, height }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = mapLink;
    script.async = true;
    script.onload = () => {
    };

    mapRef.current.appendChild(script);

    return () => {
      if (mapRef.current.contains(script)) {
        mapRef.current.removeChild(script);
      }
    };
  }, [mapLink]);

  const mapStyle = {
    width: width || '60%',
    height: height || '860px',
  };

  return <div ref={mapRef} style={mapStyle}></div>;
}

export default Map;
