import axios from 'axios';

// Create an axios instance with a base URL
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await instance.get('/users');
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch all albums
export const fetchAlbums = async () => {
    try {
        const response = await instance.get('/albums');
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch a single user by ID
export const fetchSingleUser = async ({ id }: { id: string }) => {
    try {
        const response = await instance.get('/users/' + id);
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch all albums for a specific user
export const fetchAlbumsPerUser = async ({ userId }: { userId: string }) => {
    try {
        const response = await instance.get('/albums?userId=' + userId);
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch a single album by ID
export const fetchSingleAlbum = async ({ albumId }: { albumId: string }) => {
    try {
        const response = await instance.get('/albums/' + albumId);
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch all photos for a specific album
export const fetchPhotosPerAlbum = async ({ albumId }: { albumId: string }) => {
    try {
        const response = await instance.get(`/albums/${albumId}/photos`);
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Fetch a single photo by ID
export const fetchSinglePhoto = async ({ photoId }: { photoId: string }) => {
    try {
        const response = await instance.get('/photos/' + photoId);
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

// Edit the title of a photo
export const editPhotoTitle = async ({ photoId, title }: { photoId: string; title: string }) => {
    try {
        const response = await instance.patch('/photos/' + photoId, { title });
        console.log(response.data);
        return response.data; // Return the data from the response
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};
