const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const Calculator = {
    num1: "",
    num2: "",
    operator: "",
    result: Number(),
    notify: "",
    GetInput: function () {
        this.num1 = $("#num1").value;
        this.num2 = $("#num2").value;
        if ($$('input[name="operator"]:checked').length > 0)
            this.operator = $('input[name="operator"]:checked').value;
    },
    
    isValidNumber: function (id) {
        const input = document.getElementById(id).value;
        if (isNaN(input)) {
            this.notify = "Lỗi! Dữ liệu nhập không phải là số thực.";
        }

        this.Notify();
    },
    
    Calculate: function () {
        this.GetInput();
        console.log("Log: ", this.num1, this.operator, this.num2);
        this.ClearNotify();
        if (this.num1 === "" || this.num2 === "") {
            this.notify = "Phải điền cả hai số";
            this.Notify();
            return;
        }

        if (this.operator === "") {
            this.notify = "Chưa chọn phép tính.";
            this.Notify();
            return;
        }
    
        switch (this.operator) {
            case "+":
                result = Number(this.num1) + Number(this.num2);
                break;
            case "-":
                result = Number(this.num1) - Number(this.num2);
                break;
            case "*":
                result = Number(this.num1) * Number(this.num2);
                break;
            case "/":
                result = Number(this.num1) / Number(this.num2);
                if (isFinite(this.result)) {
                    this.notify = "Không thể chia cho 0.";
                    this.Notify();
                    return;
                }
                break;
        }   

        if (!isNaN(result)) {
            $(".js-result").value = result;
        }
    },

    Notify: function () {
        if (this.notify !== "") {
            $(".js-notify").innerHTML = "Thông báo: " + this.notify;
        }
    },

    ClearNotify: function () {
        this.notify = "";
        $(".js-notify").innerHTML = "";
    }
}