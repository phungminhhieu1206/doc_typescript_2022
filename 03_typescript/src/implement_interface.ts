const contacts: IContact[] = [];

// create new interface for operator chaining
interface Pet {
  name: string;
  age?: number;
}

interface IContact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
}

class Contact implements IContact {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const A = new Contact("Nguyen Van A", "0123");
console.log(A.name);

/**
 * Trong thực tế:
 *
 */
