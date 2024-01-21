import UserPageSkeleton from "@/skeletons/user_page";

export default function UserDetailsComponent({
  userDetails,
  userAlbums,
}: {
  userDetails?: User;
  userAlbums?: Album[];
}) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring pb-6">
        {userDetails === undefined ? (
          <UserPageSkeleton />
        ) : (
          <>
            <div>
              <span className="inline-block rounded-full bg-gray-50">
                <img
                  className="h-14 w-14 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${userDetails.name}&background=random&color=random`}
                  alt=""
                />
              </span>

              <h2 className="mt-2 font-bold">{userDetails.name}</h2>

              <p className="mt-1 block text-sm text-gray-600">
                Below are all the albums by {userDetails.name}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 mt-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {userDetails?.username}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Username
                </p>
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {userDetails?.email}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Email Address
                </p>
              </div>

              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {userDetails?.address.street}, {userDetails?.address.city}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Physical Address
                </p>
              </div>
            </div>
          </>
        )}

        <div className="border-t border-gray-200 mt-6"></div>

        <h2 className="font-bold text-lg mt-6">Albums</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 mt-5">
          {userAlbums?.length ?? 0 > 0
            ? userAlbums?.map((album: Album) => (
                <div
                  key={album.id}
                  className="block rounded-xl p-4 bg-[#f1f5f9]"
                >
                  <img src="/album.png" alt="" className="h-16 w-16" />
                  <h2 className="text-sm font-semibold leading-6 text-gray-900 mt-4">
                    {album.title}
                  </h2>
                </div>
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm animate-pulse bg-[#f1f5f9]"
                  >
                    <div className="h-16 bg-gray-200 rounded-full w-16 mb-4"></div>
                    <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
}
