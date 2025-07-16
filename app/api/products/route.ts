import { NextResponse } from 'next/server';
import { products } from '@/data/products'; 

export const GET = async () => {
    return NextResponse.json(products);
};