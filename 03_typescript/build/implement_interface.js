const contacts = [];
class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
const A = new Contact("Nguyen Van A", "0123");
console.log(A.name);
class ContactApp {
    constructor(x) {
        this.adapter = x;
    }
    async render() {
        const contacts = await this.adapter.getData();
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
class MyContactAdapter {
    async getData() {
        // TODO: get data from API
        const contacts = [
            { name: "Nguyen Van A", phone: "123" },
            { name: "Nguyen Van B", phone: "456" },
        ];
        return contacts;
    }
}
const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();
