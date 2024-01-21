"use client";

import HeaderComponent from "@/components/header";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import UsersComponent from "@/components/users";
import { fetchAlbums, fetchUsers } from "@/utils/data";
import { toast } from "sonner";

export default function Application() {
  const [users, setUsers] = useState<UserWithAlbumCount[]>([]);

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
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    };

    fetchData();
  }, []);

  const mapAlbumsToUsers = (
    users: User[],
    albums: Album[]
  ): UserWithAlbumCount[] => {
    return users.map((user) => ({
      ...user,
      albumCount: albums.filter((album) => album.userId === user.id).length,
    }));
  };

  return (
    <main className="bg-white">
      <HeaderComponent signOut={signOut} useSession={useSession} />
      <UsersComponent users={users} />
    </main>
  );
}
