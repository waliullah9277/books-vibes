"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BookContext) as {
        readBooks: IBook[];
        wishlist: IBook[];
    };;

    const [sortBy, setSortBy] = useState<"rating" | "year" | "page">(
        "rating"
    );

    const [activeTab, setActiveTab] = useState<"read" | "wishlist">(
        "read"
    );

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "page") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "year") {
            sortedBooks.sort(
                (a, b) => b.yearOfPublishing - a.yearOfPublishing
            );
        }

        return sortedBooks;
    };

    const books = activeTab === "read" ? readBooks : wishlist;

    const sortedBooks = sortBooks(books);

    return (
        <section className="container mx-auto px-4 py-8">

            {/* ================= HEADER ================= */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Listed Books
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Manage your read books and wishlist from one place.
                </p>
            </div>

            {/* ================= SORT ================= */}
            <div className="py-5 text-center">
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as "rating" | "year" | "page"
                        )
                    }
                    className="select select-success"
                >
                    <option value="rating">Rating</option>
                    <option value="year">Publish Year</option>
                    <option value="page">Page Number</option>
                </select>
            </div>

            {/* ================= TABS ================= */}
            <div className="mb-8 flex w-fit rounded-xl bg-gray-100 p-1">

                {/* Read Books */}
                <button
                    type="button"
                    onClick={() => setActiveTab("read")}
                    className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        activeTab === "read"
                            ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                    Read Books ({readBooks.length})
                </button>

                {/* Wishlist */}
                <button
                    type="button"
                    onClick={() => setActiveTab("wishlist")}
                    className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        activeTab === "wishlist"
                            ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                    Wishlist ({wishlist.length})
                </button>
            </div>

            {/* ================= BOOK LIST ================= */}
            <div className="space-y-5">
                {sortedBooks.length > 0 ? (
                    sortedBooks.map((book: IBook) => (
                        <ListedBookCard
                            key={book.bookId}
                            book={book}
                            type={activeTab}
                        />
                    ))
                ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
                        <div className="text-5xl">📚</div>

                        <h2 className="mt-4 text-xl font-bold text-gray-800">
                            {activeTab === "read"
                                ? "No Read Books Yet"
                                : "Your Wishlist Is Empty"}
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            {activeTab === "read"
                                ? "Start reading a book and it will appear here."
                                : "Add your favorite books to your wishlist."}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ListedBooks;

