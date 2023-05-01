import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { API_KEY } from 'your_api_key';


const Short = () => {
  const [review, setReview] = useState(null);
  const { latitude, longitude } = location;

  useEffect(() => {
    fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReview(data.businesses[0]);
      })
      .catch((error) => console.error(error));
  }, [latitude, longitude]);
  return (
    <View style={{ flex: 1 }}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: latitude, longitude: longitude }}
        title={review?.name}
        description={review?.categories.map((category) => category.title).join(', ')}
      />
    </MapView>
    {review && (
      <View style={{ backgroundColor: 'white', padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{review.name}</Text>
        <Text>{review.location.address1}</Text>
        <Text>{review.location.city}, {review.location.state} {review.location.zip_code}</Text>
        <Text>{review.phone}</Text>
        <Text>{review.rating} stars ({review.review_count} reviews)</Text>
      </View>
    )}
  </View>
  )
}

export default Short;

