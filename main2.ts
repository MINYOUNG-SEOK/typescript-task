export { }
// 문제은행 3강- type, interface
// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:
interface UserInterface {
    id: number;
    name: string;
    email?: string;
}

type UserType = {
    id: number;
    name: string;
    email?: string;
}

const user1: UserInterface = {
    id: 1,
    name: "Alice",
};

const userWithEmail: UserType = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};

// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
// User 타입을 작성하세요.
type User = {
    id: number;
    name: string;
    address: {
        city: string;
        zipCode: number;
    };
};
const user2: User = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};

// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
// User 인터페이스 작성
interface NormalUser {
    id: number;
    name: string;
    email?: string;
}

// Admin 인터페이스 작성 (User 확장)
interface AdminUser extends NormalUser {
    role: string;
}

const normalUser: NormalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

const adminUser: AdminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};

// 문제 4. 아래 조건에 따라 type을 확장하세요.
// Product 타입 작성
type NormalProduct = {
    id: number;
    name: string;
    price: number;
}

// DiscountedProduct 타입 작성 (Product 확장)
type DiscountedProduct = NormalProduct & {
    discount: number;
}

const normalProduct: NormalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};

const discountedProduct: DiscountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};

// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// Product 타입 작성
interface Product {
    id: number;
    name: string;
    price: number;
}
// Order 타입 작성
interface Order {
    orderId: number;
    products: Product[];
    totalPrice: number;
}

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: Order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};



// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// BaseUser 인터페이스 작성
interface BaseUser {
    id: number;
    name: string;
}

// AdminUser 타입 작성
type AdminUser1 = BaseUser & {
    role: string;
};

// GuestUser 타입 작성
type GuestUser = BaseUser & {
    visitCount: number;
};

// 아래 객체를 작성하세요.
const admin: AdminUser1 = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};

const guest: GuestUser = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};


// 문제은행 4강 - 고급타입
// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
// 작업 상태를 나타내는 enum을 작성하세요.
enum TaskStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
}

function getStatusMessage(status: TaskStatus): string {
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
enum TaskStatus1 {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed",
}

function processTask(status: TaskStatus1, input: unknown): string {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.")
    }

    switch (status) {
        case TaskStatus1.Pending:
            return input.toUpperCase();
        case TaskStatus1.InProgress:
            return input.toLowerCase();
        case TaskStatus1.Completed:
            return `완료: ${input}`;
        case TaskStatus1.Failed:
            throw new Error("작업이 실패했습니다.");
        default:
            throw new Error("알 수 없는 상태입니다.")

    }
}

// 테스트 코드
const tests = [
    () => console.log(processTask(TaskStatus1.Pending, "task1")),
    () => console.log(processTask(TaskStatus1.InProgress, "TaskA")),
    () => console.log(processTask(TaskStatus1.Completed, "Report1")),
    () => console.log(processTask(TaskStatus1.Failed, "TaskX")),
    () => console.log(processTask(TaskStatus1.Pending, 41232)),
];

for (const test of tests) {
    try {
        test();
    } catch (e) {
        console.error((e as Error).message);
    }
}

// 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 로그 수준을 나타내는 enum 작성
enum LogLevel {
    Info = "Info",
    Error = "Error",
    Debug = "Debug",
}

// 로그 함수 타입을 정의하세요.
type LogFunction = (message: string, level: LogLevel) => void;

// 로그 함수 구현
const logMessage: LogFunction = (message, level) => {
    switch (level) {
        case LogLevel.Info:
            console.log(`[INFO] ${message}`);
            break;
        case LogLevel.Error:
            console.error(`[ERROR] ${message}`);
            break;
        case LogLevel.Debug:
            console.debug(`[DEBUG] ${message}`);
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
function processAny(input: any): string {
    return String(input);
}

function processUnknown(input: unknown): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        throw new Error("지원하지 않는 타입입니다.")
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
    console.log(processUnknown(true));  // 에러 발생
} catch (e) {
    console.error((e as Error).message); // 기대 출력: "지원하지 않는 타입입니다."
}

