import { NextResponse } from 'next/server';
import { topics } from '@/data/topics';

export const GET = async () => {
    return NextResponse.json(topics);
};