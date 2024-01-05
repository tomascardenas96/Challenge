import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  exports: [UserService],
  controllers: [],
  providers: [UserService]
})
export class UserModule {}
