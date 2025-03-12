import request from "supertest";
import app from "./app";

describe("Testes da Rota de Alunos", () => {
  it("Deve ser possível criar um aluno", async () => {
    const res = await request(app)
      .post("/students")
      .send({ name: "John Doe" });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("John Doe");
  });

  it("Deve ser possível listar os aluno", async () => {
    const res = await request(app).get("/students");

    expect(res.statusCode).toBe(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve ser possível editar um aluno", async () => {
    const student = await request(app).post("/students").send({ name: "Jane Doe" });

    const res = await request(app)
      .put(`/students/${student.body.id}`)
      .send({ name: "Jane Smith" });
    
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Jane Smith");
  });

  it("Deve ser possível excluir um aluno", async () => {
    const student = await request(app).post("/students").send({ name: "Mike Doe" });
    
    const res = await request(app).delete(`/students/${student.body.id}`);
    
    expect(res.statusCode).toBe(204);
  });
});
