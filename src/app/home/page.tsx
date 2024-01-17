"use client";

import HeaderComponent from "@/components/header";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/components/loading";
import UsersComponent from "@/components/users";
import { fetchAlbums, fetchUsers } from "@/utils/data";

export default function Application() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // State for users with album count
  const [users, setUsers] = useState<UserWithAlbumCount[]>([]);
  const [error, setError] = useState("");

  // Inside your component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData: User[] = await fetchUsers();
        const albumsData: Album[] = await fetchAlbums();
        const usersWithAlbumCount: UserWithAlbumCount[] = mapAlbumsToUsers(
          usersData,
          albumsData
        );
        setUsers(usersWithAlbumCount);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchData();
  }, []);

  // Function to map albums to users and count them
  const mapAlbumsToUsers = (
    users: User[],
    albums: Album[]
  ): UserWithAlbumCount[] => {
    return users.map((user) => ({
      ...user,
      albumCount: albums.filter((album) => album.userId === user.id).length,
    }));
  };

  useEffect(() => {
    // If the user is not authenticated, redirect them to the sign-in page
    if (status === "loading") return; // Do nothing while loading
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  if (status === "loading") {
    return <LoadingComponent />;
  }

  return (
    <main className="bg-white">
      <HeaderComponent signOut={signOut} useSession={useSession} />
      <UsersComponent users={users} />
    </main>
  );
}
