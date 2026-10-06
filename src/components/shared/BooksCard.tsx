import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBooksProps {
  book: IBook;
}

const BooksCard = ({ book }: IBooksProps) => {
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative flex h-68 items-center justify-center bg-gray-100 p-4">
        <Image
          src={book.image}
          alt={book.bookName}
          width={220}
          height={220}
          className="h-56 w-56 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute right-1 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
            {book.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by{" "}
          <span className="font-medium text-gray-700">
            {book.author}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-400">★</span>

          <span className="font-semibold text-gray-800">
            {book.rating}
          </span>

          <span className="text-sm text-gray-400">
            / 5.0
          </span>
        </div>

        {/* Description */}
        {/* <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p> */}

        {/* Book Information */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 truncate text-sm font-semibold text-gray-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
        <button className="mt-5 w-full rounded-xl bg-indigo-600 py-2 font-semibold text-white transition-colors duration-300 hover:bg-indigo-700 cursor-pointer">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;