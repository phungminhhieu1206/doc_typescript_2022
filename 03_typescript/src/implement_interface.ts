const contacts: Contact[] = [];

// create new interface for operator chaining
interface Pet {
  name: string;
  age?: number;
}

interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
}

class Contact implements Contact {
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
 * App Contacts cho phép người dùng lấy dữ liệu contacts từ nhiều nguồn khác nhau: qua api, load từ file, ổ đĩa, ...
 * Thêm adapter giúp contactapp không phụ thuộc vào dữ liệu config, tức hoàn toàn có thể cấu hình dữ liệu input ở ngoài mà không ảnh hưởng đến root appcontact
 *
 */

/**
 * Thêm ContactAdapter giúp cấu hình dữ liệu đầu vào
 * Hàm getData, trả về mảng Contact[]
 */
interface ContactAdapter {
  getData: () => Promise<Contact[]>;
}
class ContactApp {
  adapter: ContactAdapter;
  constructor(x: ContactAdapter) {
    this.adapter = x;
  }
  async render() {
    const contacts: Contact[] = await this.adapter.getData();
    console.table(contacts);
  }
}

/**
 * Dữ liệu thêm vào: MyContactAdapter:
 * Ở đây dữ liệu có thể fetch, axios, ... từ api để lấy về
 * Return: mảng contact[]
 * => Như vậy, tiến trình là: App - Interface dữ liệu input - Class myInput - ghép với ContactApp root
 * - Khi get api thì getData() mà một async method, khi đó kiểu trả về phải là  Promise<Contact[]>
 * - Hoặc ko thích để async thì đặt: return Promise.resolve(contacts) thì hàm vẫn trả về một promise
 * - Tiếp theo khi đó trên class ContactApp chuyển render về async thì chứa hàm getData là async và cần await trước hàm đó ! (line 48-50)
 */
class MyContactAdapter implements ContactAdapter {
  async getData() {
    // TODO: get data from API
    const contacts: Contact[] = [
      { name: "Nguyen Van A", phone: "123" },
      { name: "Nguyen Van B", phone: "456" },
    ];
    return contacts;
  }
}

const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();
