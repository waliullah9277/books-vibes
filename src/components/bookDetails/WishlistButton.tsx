'use client'
import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import React, { Dispatch, useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book} : {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BookContext) as {
            wishlist: IBook[];
            setWishlist: Dispatch<React.SetStateAction<IBook[]>>;
        };
    

    const handleWishlistButton = () =>{
        console.log("handle button triggred", book);

        setWishlist([...wishlist, book])
        toast.success(`You have wishlist to ${book.bookName}`)      
    }

    return (
        <div>
            <button onClick={() => handleWishlistButton()}
              type="button"
              className="w-full rounded-xl bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl sm:w-auto cursor-pointer"
            >
              Add to Wishlist
            </button>
            
        </div>
    );
};

export default WishlistButton;