import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getCustomer() {
    return {
      firstName: "John",
      address: "New York",
      email: "test@goodleap.com",
      lastName: "Doe",
      phone: "1234567890",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      organizationId: "1234567890",
      age: "30"
    };
  }
} 