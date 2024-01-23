import UserPageSkeleton from "@/skeletons/user_page";

export default function PhotoDetailsComponent({
  photoDetails,
  editMode,
  toggleEditMode,
  handleTitleChange,
  setTitle,
  loading,
}: {
  photoDetails?: Photo;
  editMode: boolean;
  loading: boolean;
  toggleEditMode: () => void;
  handleTitleChange: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring pb-6">
        {photoDetails === undefined ? (
          <UserPageSkeleton />
        ) : (
          <div>
            <span className="inline-block rounded-full bg-gray-50">
              <img
                className="h-32 w-32 rounded-xl"
                src={photoDetails.thumbnailUrl}
                alt=""
              />
            </span>

            <div className="flex items-center mt-4">
              {editMode ? (
                <input
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                  className="border border-gray-200 rounded w-full p-2 max-w-lg"
                  defaultValue={photoDetails.title}
                />
              ) : (
                <h2 className="mt-2 font-bold">{photoDetails.title}</h2>
              )}
              <button
                className="mx-3 bg-gray-100 rounded-full py-1.5 px-4 hover:bg-gray-200"
                onClick={() =>
                  editMode ? handleTitleChange() : toggleEditMode()
                }
              >
                {editMode ? "Save" : "Edit"}
              </button>
            </div>

            <p className="mt-1 block text-sm text-gray-600 mt-4">
              Below are more details about the photo
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
