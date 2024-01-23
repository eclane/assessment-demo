import UserPageSkeleton from "@/skeletons/user_page";
import Link from "next/link";

export default function AlbumDetailsComponent({
  albumDetails,
  albumPhotos,
}: {
  albumDetails?: Album;
  albumPhotos?: Photo[];
}) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring pb-6">
        {albumDetails === undefined ? (
          <UserPageSkeleton />
        ) : (
          <div>
            <span className="inline-block rounded-full bg-gray-50">
              <img className="h-14 w-14" src="/album.png" alt="" />
            </span>

            <h2 className="mt-2 font-bold">{albumDetails.title}</h2>

            <p className="mt-1 block text-sm text-gray-600">
              Below are all the photos from this Album
            </p>
          </div>
        )}

        <div className="border-t border-gray-200 mt-6"></div>

        <h2 className="font-bold text-lg mt-6">Photos</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 mt-5">
          {albumPhotos?.length ?? 0 > 0
            ? albumPhotos?.map((photo: Photo) => (
                <Link
                  key={photo.id}
                  className="block rounded-xl bg-[#f1f5f9]"
                  href={`/app/photo/${photo.id}`}
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt=""
                    className="h-24 w-full rounded-t-xl object-cover"
                  />
                  <h2 className="text-sm font-semibold leading-6 text-gray-900 p-4">
                    {photo.title}
                  </h2>
                </Link>
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
