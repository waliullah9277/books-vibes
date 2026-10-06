import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/books.type";


const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const bookData = await getBooks();

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-indigo-600">
          Explore • Read • Grow
        </p>

        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Discover Your All{" "}
          <span className="text-indigo-600">Favorite Book</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Explore our collection of amazing books and find your next great
          read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {bookData.map((book: IBook) => {
            return (
                <BooksCard key={book.bookId} book={book}></BooksCard>
            )
        })}
      </div>
    </div>
  );
};

export default Books;