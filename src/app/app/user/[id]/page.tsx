"use client";
import HeaderComponent from "@/components/header";
import UserDetailsComponent from "@/components/user_details";
import { fetchAlbumsPerUser, fetchSingleUser } from "@/utils/data";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UserPage({ params }: { params: { id: string } }) {
  const [singleUser, setSingleUser] = useState<User>();
  const [singleUserAlbums, setSingleUserAlbums] = useState<Album[]>([]);

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

    fetchData();
  }, [params.id]);

  return (
    <main className="bg-white">
      <HeaderComponent signOut={signOut} useSession={useSession} />
      <UserDetailsComponent
        userDetails={singleUser}
        userAlbums={singleUserAlbums}
      />
    </main>
  );
}
