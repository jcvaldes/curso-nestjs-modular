import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';

import { UsersController } from './controllers/users.controller';
import { ProductsModule } from '../products/products.module';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
