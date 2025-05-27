"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = {
    id: 1,
    name: "Alice",
};
var userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
var user2 = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
var normalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
var adminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};
var normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};
var discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};
// Order 타입을 사용하여 아래 객체를 작성하세요.
var order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};
// 아래 객체를 작성하세요.
var admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};
var guest = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
// 문제은행 4강 - 고급타입
// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
// 작업 상태를 나타내는 enum을 작성하세요.
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
function getStatusMessage(status) {
    switch (status) {
        case TaskStatus.Pending:
            return "작업이 대기 중입니다.";
        case TaskStatus.InProgress:
            return "작업이 진행 중입니다.";
        case TaskStatus.Completed:
            return "작업이 완료되었습니다.";
        default:
            return "알 수 없는 상태입니다.";
    }
}
// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."
// 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 작업 상태를 나타내는 enum 작성
var TaskStatus1;
(function (TaskStatus1) {
    TaskStatus1["Pending"] = "Pending";
    TaskStatus1["InProgress"] = "InProgress";
    TaskStatus1["Completed"] = "Completed";
    TaskStatus1["Failed"] = "Failed";
})(TaskStatus1 || (TaskStatus1 = {}));
function processTask(status, input) {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.");
    }
    switch (status) {
        case TaskStatus1.Pending:
            return input.toUpperCase();
        case TaskStatus1.InProgress:
            return input.toLowerCase();
        case TaskStatus1.Completed:
            return "\uC644\uB8CC: ".concat(input);
        case TaskStatus1.Failed:
            throw new Error("작업이 실패했습니다.");
        default:
            throw new Error("알 수 없는 상태입니다.");
    }
}
// 테스트 코드
var tests = [
    function () { return console.log(processTask(TaskStatus1.Pending, "task1")); },
    function () { return console.log(processTask(TaskStatus1.InProgress, "TaskA")); },
    function () { return console.log(processTask(TaskStatus1.Completed, "Report1")); },
    function () { return console.log(processTask(TaskStatus1.Failed, "TaskX")); },
    function () { return console.log(processTask(TaskStatus1.Pending, 41232)); },
];
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var test = tests_1[_i];
    try {
        test();
    }
    catch (e) {
        console.error(e.message);
    }
}
// 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 로그 수준을 나타내는 enum 작성
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Error"] = "Error";
    LogLevel["Debug"] = "Debug";
})(LogLevel || (LogLevel = {}));
// 로그 함수 구현
var logMessage = function (message, level) {
    switch (level) {
        case LogLevel.Info:
            console.log("[INFO] ".concat(message));
            break;
        case LogLevel.Error:
            console.error("[ERROR] ".concat(message));
            break;
        case LogLevel.Debug:
            console.debug("[DEBUG] ".concat(message));
            break;
        default:
            throw new Error("알 수 없는 로그 수준입니다.");
    }
};
// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);
// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
function processAny(input) {
    return String(input);
}
function processUnknown(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        throw new Error("지원하지 않는 타입입니다.");
    }
}
// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"
console.log(processAny(null));
console.log(processAny(undefined));
console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
try {
    console.log(processUnknown(true)); // 에러 발생
}
catch (e) {
    console.error(e.message); // 기대 출력: "지원하지 않는 타입입니다."
}
