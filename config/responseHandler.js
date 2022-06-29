function resposeHandler(res, responseObject, message, error, status) {
	res.status(status).send({
		error: error,
		message: message,
		data: responseObject,
	});
	res.end();
}

exports.error = async function (res, responseObject, message, status) {
	resposeHandler(res, responseObject, message, true, status);
};

exports.success = async function (res, responseObject, message, status) {
	resposeHandler(res, responseObject, message, false, status);
};