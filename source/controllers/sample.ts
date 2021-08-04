import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleReq = (req: Request, res: Response, next: NextFunction) => {
    logging.info('NAMESPACE', 'SAMPLE REQUEST ROUTE CALLED');

    return res.status(200).json({
        message: 'Bing'
    });
};

export default { sampleReq };
