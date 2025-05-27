"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function calculateDiscountedPrice(item) {
    return item.price * (1 - item.discountPercentage / 100);
}
// 테스트 코드
var discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct)); // 800
function printOrderSummary(order) {
    return "Order ".concat(order.orderId, " (Phone: ").concat(order.phone, ")");
}
// 테스트 코드
var orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return __assign(__assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    return "\uC0AC\uC6A9\uC790 ".concat(user.id, " - ").concat(user.name, " (").concat(user.email, ") - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778: ").concat(user.lastLogin.toISOString());
}
// 테스트 코드
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
// 문제은행 9강 - 유니온 타입
// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.
// 매개변수, 리턴타입 정의필요 
function processInput(input) {
    if (Array.isArray(input)) {
        // 빈 배열일 때
        if (input.length === 0) {
            return 0;
        }
        // 첫 요소로 숫자/문자열 분기
        if (typeof input[0] === "number") {
            return input.reduce(function (sum, num) { return sum + num; }, 0);
        }
        else {
            return input.join("");
        }
    }
    return input.message.toUpperCase();
}
// 테스트 코드
console.log(processInput([])); // 0
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생 : 에러로 인한 주석 처리
// 문제2. 다음 조건을 만족하는 코드를 작성하세요.
// 클래스 정의
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase(); // Car이면 브랜드 이름을 대문자로 반환
    }
    else if (vehicle instanceof Bike) { // Bike이면 타입 이름을 반환
        return "Bike: ".concat(vehicle.type);
    }
    throw new Error("유효하지 않는 타입입니다.");
}
// 테스트 코드
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
    if ("permissions" in user) {
        return user.permissions.join(","); // Admin이면 권한 목록을 ,로 연결
    }
    else if ("email" in user) {
        return user.email; // User이면 이메일 주소 반환
    }
    throw new Error("유효하지 않는 타입입니다.");
}
// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// 사용자 정의 타입 가드
function isRectangle(shape) {
    return (typeof shape === "object" &&
        shape != null &&
        typeof shape.width === "number" &&
        typeof shape.height === "number");
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    return Math.PI * Math.pow(shape.radius, 2);
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
// 넓이를 계산하는 함수
function calculateArea1(shape) {
    switch (shape.type) {
        case "square":
            return shape.side * shape.side;
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        default:
            var _exhaustive = shape;
            throw new Error("\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD0C0\uC785\uC785\uB2C8\uB2E4 : ".concat(_exhaustive.type));
    }
}
// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
