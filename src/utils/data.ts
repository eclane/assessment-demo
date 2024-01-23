import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchUsers = async () => {
    try {
        const response = await instance.get('/users');
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const fetchAlbums = async () => {
    try {
        const response = await instance.get('/albums');
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const fetchSingleUser = async ({ id }: { id: string }) => {
    try {
        const response = await instance.get('/users/' + id);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};


export const fetchAlbumsPerUser = async ({ userId }: { userId: string }) => {
    try {
        const response = await instance.get('/albums?userId=' + userId);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const fetchSingleAlbum = async ({ albumId }: { albumId: string }) => {
    try {
        const response = await instance.get('/albums/' + albumId);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};


export const fetchPhotosPerAlbum = async ({ albumId }: { albumId: string }) => {
    try {
        const response = await instance.get(`/albums/${albumId}/photos`);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};


export const fetchSinglePhoto = async ({ photoId }: { photoId: string }) => {
    try {
        const response = await instance.get('/photos/' + photoId);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

//edit photo title

export const editPhotoTitle = async ({ photoId, title }: { photoId: string; title: string }) => {
    try {
        const response = await instance.patch('/photos/' + photoId, { title });
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};
