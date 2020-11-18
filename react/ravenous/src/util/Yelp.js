const apiKey = `HTvzx2DuDH51lUDlHJDGN4TDmENp7WMG1EH54AFosP7Q90LCNJB3yw_WKkp1GSS0Oix0ZBNQzwbdUuUsl8q-K_9tyfIZmTvfklLAvYO0fBMtPJH0UXWmZ5gVoxl9X3Yx`;

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
            Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json();
        }).then(jsonResponse => {
             if (jsonResponse.businesses) {
                 return jsonResponse.businesses.map((business) => {
                    return {
                     id: business.id,
                     imageSrc: business.image_url,
                     name: business.name,
                     address: business.location.address1,
                     city: business.location.city,
                     state: business.location.state,
                     zipCode: business.location.zip_code,
                     category: business.categories[0].title,
                     rating: business.rating,
                     reviewCount: business.review_count,
                 }});
             }
        });
    }
}

export default Yelp;