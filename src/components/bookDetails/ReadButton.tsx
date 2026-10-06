'use client'
import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import React, { Dispatch, useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book} : {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BookContext) as {
        readBooks: IBook[];
        setReadBooks: Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handleReadButton = () =>{
        console.log("handle button triggred", book);

        setReadBooks([...readBooks, book])
        toast.success(`You have read ${book.bookName}`)      
    }

    return (
        <div>
            <button onClick={() => handleReadButton()}
              type="button"
              className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl sm:w-auto cursor-pointer"
            >
              Start Reading
            </button>
        </div>
    );
};

export default ReadButton;