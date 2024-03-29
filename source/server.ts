import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoute from './routes/userRoute';

const NAMESPACE = 'server';
const router = express();

/**
 * Logging the request
 */

router.use((req, res, next) => {
	logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

	res.on('finish', () => {
		logging.info(
			NAMESPACE,
			`METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket
				.remoteAddress}], STATUS - [${res.statusCode}]`
		);
	});

	next();
});

/**
 * Parse the Request
 */

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/**
 * Rules of the API
 */
router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if (req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
		return res.status(200).json({});
	}

	next();
});

/**
 * Routes
 */
router.use(sampleRoute);

/** Error Handling */

router.use((req, res, next) => {
	const error = new Error('not found');

	return res.status(404).json({
		message: error.message
	});
});

/**
 * Server
 */

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
	logging.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`)
);
