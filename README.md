# backend-assignment-colavo

## version

- node: v14.15.4
- npm: 6.14.10

## RestAPI

```
POST - http://localhost:3000/getTimeSlots
```

## How to Run

**Install all dependencies**

```
npm install
```

**Start programs**

```
npm start
```

## typescript의 장점

- 기존 자바스크립트 소스와의 호환
- 컴파일 단계에서 오류를 포착할 수 있는 정적 타입
- 프론트와 백엔드모두 typescript로 구현한다면 높은 개발 안정성과 편의성 보장

## validation

**위의 타입스크립트의 장점이 있는 것은 알지만 아직 많이 공부한 적이 없어 express-validation이란 라이브러리 사용**
타입스크립트의 장점 중 정적 타입을 대신해 타입 체킹을 해주고 유효성 검사도 해주는 라이브러리

```
npm i express-validator
```
