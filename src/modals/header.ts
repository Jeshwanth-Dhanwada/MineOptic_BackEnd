interface Header {
	message: string;
	errorMessage: string;
	errorCode: string;
  }
  
  const getHeaderNode = (code: string, msg: string): Promise<Header> => {
	return new Promise((resolve, reject) => {
	  const header: Header = {
		message: msg,
		errorMessage: '',
		errorCode: '0',
	  };
  
	  const getErrorCode = (): Promise<void> => {
		return new Promise((resolve, _reject) => {
		  if (code) {
			switch (code) {
			  case 'INVALID_USER': {
				header.message = 'You are not authorized.';
				header.errorCode = '1';
				break;
			  }
			  default: {
				header.message = '';
				break;
			  }
			}
			return resolve();
		  } else {
			return resolve();
		  }
		});
	  };
  
	  getErrorCode()
		.then(() => {
		  resolve(header);
		})
		.catch((err) => {
		  console.log(err);
		  reject(err);
		});
	});
  };
  
  export { getHeaderNode as header };