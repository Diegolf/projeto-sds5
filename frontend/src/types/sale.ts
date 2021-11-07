import { Paginable } from 'components/pagination';
import { Seller } from './seller';

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = Paginable & {
    numberOfElements?: number;
    size?: number;
    empty?: boolean;
    content?: Sale[];
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}