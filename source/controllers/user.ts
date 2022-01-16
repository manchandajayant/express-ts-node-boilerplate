import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import { Query } from '../helpers/sql-query/query';
const NAMESPACE = 'User Controller';

interface user {
	username: String;
	email: String;
	password: String;
}
const query = new Query();
query.executeQuery('something');
export class User {
	getUserReq(this: any, req: Request, res: Response, next: NextFunction) {
		logging.info(NAMESPACE, 'USER REQUEST ROUTE CALLED');

		return res.status(200).json({
			message: 'User route'
		});
	}
}
