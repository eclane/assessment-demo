import Link from "next/link";

export default function UsersComponent({
  users,
}: {
  users: UserWithAlbumCount[];
}) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {users.length > 0
          ? users.map((user: UserWithAlbumCount) => (
              <Link
                key={user.id}
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href={`/app/user/${user.id.toString()}`}
              >
                <span className="inline-block rounded-full bg-gray-50">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=random`}
                    alt=""
                  />
                </span>

                <h2 className="mt-2 font-bold">{user.name}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Has a total of {user.albumCount} albums
                </p>
              </Link>
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm animate-pulse"
                >
                  <div className="h-10 bg-gray-200 rounded-full w-10 mb-4"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
      </div>
    </section>
  );
}
