// Interface: Khi muốn có những object kết hợp các kiểu đơn thuần với nhau
/**
 * Giả sử có một danh bạ điện thoại - 1 array: contacts
 * Mỗi item trong danh bạ là một kiểu object - interface
 */

// optional properties (>< required): Định nghĩa một trường có thể có hoặc không !
/**
 * Ví dụ: email
 * Thực hiện: Thêm dấu ? vào sau tên trường
 */

import { send } from ".//mailer";

const contacts: IContact[] = [];

interface IContact {
  name: string;
  phone: string;
  email?: string;
}

const newContact: IContact = {
  name: "Nguyen Van A",
  phone: "09118181",
  email: "abc@gmail.com",
};

const otherContact: IContact = {
  name: "Nguyen Van B",
  phone: "0930219302",
};
contacts.push(newContact);

if (newContact.email !== undefined) {
  send(newContact.email, "1", "2");
}

/**
 * Khi có phương thức send ở trên: nhận vào email dạng 'optional' như vậy có thể là string hoặc undefined
 * Như vậy sẽ nguy hiểm trong thực tế, không lỗi khi compiler nhưng lỗi khi run ở mailer là gửi đến một mail undefined
 * Khắc phục điều này, cần bật cảnh báo khi compile ts sang js bằng cách:
 * + Thêm nội dung này vào tsconfig.json: "strictNullChecks": true (mặc định là false)
 * + Khi đó dòng 36 sẽ lập tức cảnh báo: "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'"
 * Do đó cần check not undefined trước khi send   
 */
