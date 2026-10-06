import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IListedBookCardProps {
  book: IBook;
  type: "read" | "wishlist";
}

const ListedBookCard = ({
  book,
  type,
}: IListedBookCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:flex-row">
      {/* ================= IMAGE ================= */}
      <div className="flex min-h-65 w-full items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-5 md:min-h-62.5 md:w-56 md:shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={230}
          className="h-52 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {/* Category + Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-linear-to-r from-indigo-100 to-purple-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {book.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              type === "read"
                ? "bg-green-100 text-green-700"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {type === "read" ? "✓ Read" : "♡ Wishlist"}
          </span>
        </div>

        {/* Book Name */}
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by{" "}
          <span className="font-semibold text-gray-700">
            {book.author}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg text-yellow-400">★</span>

          <span className="font-bold text-gray-800">
            {book.rating}
          </span>

          <span className="text-sm text-gray-400">
            / 5.0
          </span>
        </div>

        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Book Information */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 sm:grid-cols-4">
          {/* Pages */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Pages
            </p>

            <p className="mt-1 text-sm font-bold text-gray-700">
              {book.totalPages}
            </p>
          </div>

          {/* Publisher */}
          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Publisher
            </p>

            <p className="mt-1 wrap-break-word text-sm font-bold text-gray-700">
              {book.publisher}
            </p>
          </div>

          {/* Year */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Published
            </p>

            <p className="mt-1 text-sm font-bold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-linear-to-r from-indigo-50 to-purple-50 px-3 py-1 text-xs font-semibold text-indigo-600 opacity-100"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* ================= VIEW DETAILS BUTTON ================= */}
        <div className="mt-5">
          <Link
            href={`/books/${book.bookId}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg sm:w-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;