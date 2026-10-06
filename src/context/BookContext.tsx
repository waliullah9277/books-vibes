'use client'
import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';

export const BookContext = createContext({})

const BookProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

    const shareData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return <BookContext.Provider value={shareData}> {children}</BookContext.Provider>
};

export default BookProvider;