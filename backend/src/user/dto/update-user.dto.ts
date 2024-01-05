import { PartialType } from '@nestjs/mapped-types';
import { usersDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(usersDTO) {}
