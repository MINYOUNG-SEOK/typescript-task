export { }
// 문제은행 6강 교차타입
// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.

// Product 타입 정의
interface Product {
    id: number;
    name: string;
    price: number;
}

// Discount 타입 정의
interface Discount {
    discountPercentage: number;
}

type DiscountedProduct = Product & Discount;

function calculateDiscountedPrice(item: DiscountedProduct): number {
    return item.price * (1 - item.discountPercentage / 100)
}

// 테스트 코드
const discountedProduct: DiscountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800



// 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.
// ContactInfo 타입 정의
interface ContactInfo {
    phone: string;
    address: string;
}

// OrderInfo 타입 정의
interface OrderInfo {
    orderId: number;
    items: string[];
}

type OrderDetails = ContactInfo & OrderInfo;

function printOrderSummary(order: OrderDetails): string {
    return `Order ${order.orderId} (Phone: ${order.phone})`
}

// 테스트 코드
const orderDetails: OrderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"



// 문제3. 사용자 프로필과 활동 기록 병합
// 기본 사용자 정보 타입 정의
interface Profile {
    id: number;
    name: string;
    email: string;
}

// 사용자 활동 기록 타입 정의
interface Activity {
    lastLogin: Date;
    actions: string[];
}

type UserData = Profile & Activity;

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: Profile, activity: Activity): UserData {
    return { ...profile, ...activity }
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: UserData): string {
    return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile: Profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity: Activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"



// 문제은행 9강 - 유니온 타입
// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.
// 매개변수, 리턴타입 정의필요 
function processInput(
    input: number[] | string[] | { message: string }
): number | string {
    if (Array.isArray(input)) {
        // 빈 배열일 때
        if (input.length === 0) {
            return 0;
        }

        // 첫 요소로 숫자/문자열 분기
        if (typeof input[0] === "number") {
            return (input as number[]).reduce((sum, num) => sum + num, 0);
        } else {
            return (input as string[]).join("");
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
class Car {
    constructor(public brand: string) { }
}
class Bike {
    constructor(public type: string) { }
}
function processVehicle(vehicle: Car | Bike): string {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase(); // Car이면 브랜드 이름을 대문자로 반환
    } else if (vehicle instanceof Bike) { // Bike이면 타입 이름을 반환
        return `Bike: ${vehicle.type}`;
    }
    throw new Error("유효하지 않는 타입입니다.")
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"



// 문제3. in을 활용한 사용자 관리
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
    if ("permissions" in user) {
        return user.permissions.join(","); // Admin이면 권한 목록을 ,로 연결
    } else if ("email" in user) {
        return user.email; // User이면 이메일 주소 반환
    }
    throw new Error("유효하지 않는 타입입니다.");
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// console.log(processUser({ type: "guest" })); // 에러 발생 : 에러로 인한 주석 처리



// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
    return (
        typeof shape === "object" &&
        shape != null &&
        typeof (shape as any).width === "number" &&
        typeof (shape as any).height === "number"
    );
}

function calculateArea(shape: Rectangle | Circle): number {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    return Math.PI * shape.radius ** 2;
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)



// 문제5. 유니온 타입의 문제점과 해결 방법
type Square = { type: "square"; side: number };
type Circle1 = { type: "circle"; radius: number };
type Shape = Square | Circle1

// 넓이를 계산하는 함수
function calculateArea1(shape: Shape): number {
    switch (shape.type) {
        case "square":
            return shape.side * shape.side;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:
            const _exhaustive: never = shape;
            throw new Error(`유효하지 않은 타입입니다 : ${(_exhaustive as any).type}`);
    }
}

// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 }));  // 기대 출력: 25
console.log(calculateArea1({ type: "circle", radius: 7 }));// 기대 출력: 153.93804002589985





