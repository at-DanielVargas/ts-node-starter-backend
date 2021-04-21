import { Response, Request, NextFunction } from 'express';

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

export interface IRoute {
    path: string;
    method: Methods;
    handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
    localMiddleware: ((req: Request, res: Response, next: NextFunction) => void)[]
};