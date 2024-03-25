import { HttpException } from '@nestjs/common';

function createException(message: string, statusCode: number) {
  return new HttpException(message, statusCode);
}

export default {
  createException,
  createBadRequestException: (message: string) => createException(message, 400),
};
