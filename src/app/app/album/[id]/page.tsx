"use client";
import AlbumDetailsComponent from "@/components/album_details";
import { fetchPhotosPerAlbum, fetchSingleAlbum } from "@/utils/data";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AlbumPage({ params }: { params: { id: string } }) {
  const [singleAlbum, setSingleAlbum] = useState<Album>();
  const [singleAlbumPhotos, setSingleAlbumPhotos] = useState<Photo[]>([]);


  //Fetching the single album and its photos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleAlbumData: Album = await fetchSingleAlbum({
          albumId: params.id,
        });
        const albumPhotos: Photo[] = await fetchPhotosPerAlbum({
          albumId: params.id,
        });

        setSingleAlbum(singleAlbumData);
        setSingleAlbumPhotos(albumPhotos);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    };

    //Calling the fetchData function
    fetchData();
  }, [params.id]);

  return (
    <main className="bg-white">
      <AlbumDetailsComponent
        albumDetails={singleAlbum}
        albumPhotos={singleAlbumPhotos}
      />
    </main>
  );
}
