// Define interfaces for your data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  interface Album {
    userId: number;
    id: number;
    title: string;
  }
  
  interface UserWithAlbumCount extends User {
    albumCount: number;
  }
  