// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.
function getValue(obj, key) {
    return obj[key];
}
// 테스트 코드
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
function processRequest(type, data) {
    if (type === "text") {
        return "Processed: ".concat(data);
    }
    else if (type === "json") {
        return "Processed: ".concat(JSON.stringify(data));
    }
    else if (type === "binary") {
        return "Processed: ".concat(data.join(","));
    }
    throw new Error("Unsupported type");
}
// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
