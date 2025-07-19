import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getCustomer() {
    return {
      name: "John Doe",
      address: "New York",
      email: "test@goodleap.com"
    };
  }
} 