// Define interfaces for your data
interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface UserWithAlbumCount extends User {
  albumCount: number;
}

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}


