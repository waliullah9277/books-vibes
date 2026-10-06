import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BookDetailPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const bookData = await getBooks();

  const book = bookData.find(
    (book) => String(book.bookId) === String(id)
  );

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Book Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The book you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Main Card */}
      <div className="card lg:card-side overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* ================= IMAGE ================= */}
        <figure className="flex min-h-100 items-center justify-center bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50 p-5 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={600}
            priority
            className="h-auto max-h-125 w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </figure>

        {/* ================= BOOK DETAILS ================= */}
        <div className="card-body p-5 sm:p-6 lg:w-3/5 lg:p-7">
          {/* Category */}
          <div>
            <span className="inline-flex rounded-full bg-linear-to-r from-indigo-100 to-purple-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
              {book.category}
            </span>
          </div>

          {/* Book Name */}
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-1 text-base text-gray-500">
            Written by{" "}
            <span className="font-semibold text-gray-800">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xl text-yellow-400">★</span>

              <span className="font-bold text-gray-800">
                {book.rating}
              </span>
            </div>

            <span className="text-gray-300">|</span>

            <span className="text-sm text-gray-500">
              5.0 Rating
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-200" />

          {/* Review */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              About This Book
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-gray-50 p-4 sm:grid-cols-4">
            {/* Pages */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Pages
              </p>

              <p className="mt-1 text-lg font-bold text-gray-800">
                {book.totalPages}
              </p>
            </div>

            {/* Published */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Published
              </p>

              <p className="mt-1 text-lg font-bold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>

            {/* Category */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Category
              </p>

              <p className="mt-1 text-lg font-bold text-gray-800">
                {book.category}
              </p>
            </div>

            {/* Book ID */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Book ID
              </p>

              <p className="mt-1 text-lg font-bold text-gray-800">
                #{book.bookId}
              </p>
            </div>
          </div>

          {/* Publisher */}
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Publisher
            </p>

            <p className="mt-1 wrap-break-word text-base font-bold leading-6 text-gray-800">
              {book.publisher}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <h3 className="mb-2 text-sm font-bold text-gray-800">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  disabled
                  className="rounded-full bg-linear-to-r from-indigo-50 to-purple-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 opacity-100"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {/* Start Reading */}
            <ReadButton book={book}></ReadButton>

            {/* Wishlist */}
            <WishlistButton book={book}></WishlistButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;