import request from "supertest";
import app from "../src/app";

describe("Testes da rota padrão", () => {
  it("Deve ser possível ver a mensagem de servidor no ar", async () => {
    const res = await request(app)
      .get("/")

    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Servidor no ar!");
  });
});
