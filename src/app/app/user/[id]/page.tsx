"use client";
import UserDetailsComponent from "@/components/user_details";
import { fetchAlbumsPerUser, fetchSingleUser } from "@/utils/data";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UserPage({ params }: { params: { id: string } }) {
  const [singleUser, setSingleUser] = useState<User>();
  const [singleUserAlbums, setSingleUserAlbums] = useState<Album[]>([]);


  //Fetching the single user and their albums
  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleUserData: User = await fetchSingleUser({ id: params.id });
        const userAlbums: Album[] = await fetchAlbumsPerUser({
          userId: params.id,
        });

        setSingleUser(singleUserData);
        setSingleUserAlbums(userAlbums);
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
      <UserDetailsComponent
        userDetails={singleUser}
        userAlbums={singleUserAlbums}
      />
    </main>
  );
}
