
# collaboreatery
## Overview:
Collboreatery is community fed database for restaraunts based price, location, and cuisine. After signing up users will have the ability to add their favorite restaraunt recomendations. Users will also have the ability to edit current listings.
## Team Expectations:
https://docs.google.com/document/d/198EA5K5RKCRDwcpLmcwZPWa6K5ZMS0kmki_5Q9GW2F0/edit?

## Whimsical:
https://whimsical.com/p3-K3Q9ndzLFZkv95h6EHmn4g

## Projects Board:
https://github.com/jmoreland08/collaboreatery/projects/1


## Schema: 
```
Listings
{
name:{"",required : true}
decription:{"",required : true}
cuisine:{"",required : true}
location:{"",required : true}
price_point:{,required : true}
imgURl:{"",required : true}
}```

Users
```{
username:{"",required : true}
email:{"",required : true}
password_digest:{"",required : true}
}```

## Post MVP:
- Filter by cuisine, location, and price point.
- Add reviews to listings
- Add roles to authentication
- Add carousel with additional photos to listing details page
- Add feature to let users save favorite listing
