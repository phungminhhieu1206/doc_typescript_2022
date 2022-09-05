// extend interface

interface Button {
  label: string;
  onClick: () => void;
}

const button: Button = {
  label: "Submit",
  onClick: () => {
    console.log("Click button submit!");
  },
};

// Tạo thêm một button khác, có thêm một trường icon để thêm icon vào bên trái:
interface IconButton extends Button {
  icon: string;
}

const addToCart: IconButton = {
  icon: "fa-11",
  label: "addButton",
  onClick: () => {
    console.log("Icon button click !");
  },
};
