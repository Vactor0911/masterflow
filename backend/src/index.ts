import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// CORS 설정
app.use(
  cors({
    origin:
      process.env.ENV === "production"
        ? "https://vactor0911.github.io"
        : `http://localhost:${process.env.FRONT_PORT}`,
    credentials: true,
  })
);

// 기본 라우트 설정
app.get("/", (_req: Request, res: Response) => {
  res.send("MasterFlow Web Server!");
});

// 서버 시작
const PORT = Number(process.env.PORT);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
