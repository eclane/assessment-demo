"use client";
import PhotoDetailsComponent from "@/components/photo_details";
import { editPhotoTitle, fetchSinglePhoto } from "@/utils/data";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const [singlePhoto, setSinglePhoto] = useState<Photo>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  //Toggling the edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };


  //Fetching the single photo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const singlePhotoData: Photo = await fetchSinglePhoto({
          photoId: params.id,
        });

        setSinglePhoto(singlePhotoData);
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


  //Editing the photo title
  const handleTitleChange = async () => {
    setUpdateLoading(true);
    try {
      const updatedPhotoData = await editPhotoTitle({
        photoId: params.id,
        title: title,
      });
      setSinglePhoto(updatedPhotoData);
      toggleEditMode();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
    setUpdateLoading(false);
  };

  return (
    <main className="bg-white">
      <PhotoDetailsComponent
        photoDetails={singlePhoto}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
        handleTitleChange={handleTitleChange}
        setTitle={setTitle}
        loading={updateLoading}
      />
    </main>
  );
}
