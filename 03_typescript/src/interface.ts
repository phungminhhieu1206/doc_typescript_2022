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

// optional chaining
/**
 * Trường hợp thực tế khi không kiểm soát được undefined gây ra hiện tượng: crash;
 * Crash: trong react thì trắng trang, trong server node thì không load được server
 *
 */

import { send } from "./mailer";

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

const newContact: IContact = {
  name: "Nguyen Van A",
  phone: "09118181",
  email: "abc@gmail.com",
  pet: {
    name: "Pet A",
  },
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

// operator chaining
/**
 * 1. Thêm ? để kiểm tra undefined cho pet, khi đến ? mà kqua là undefined thì dừng lại
 * 2. Tuy nhiên chẳng hạn đến pet thì không undefined nhưng name thì undefined như vậy vi phạm kiểu trả về của hàm là string
 *  + Giải pháp: thêm || '' để khi name trả về undefined thì return '' <chuỗi rỗng>
 *
 * 3. Trong thực tế thì không viết xác định chính xác kiểu trả về của hàm là gì, mà lúc trả về cái này, lúc trả về cái kia
 */
function getPetName(contact: IContact): string {
  return contact.pet?.name || "";
}
