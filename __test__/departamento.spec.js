const { app, server } = require("../src/server.js");
const mongoose = require("mongoose");

const { getAllDespartamentos } = require("../src/controllers/departamento.controller.js")
const { DepartamentoModel } = require("../src/models/departamento.model.js");

jest.mock("../src/models/departamento.model.js");

describe('Departamento Controller', () => {
  
  it('should return 200 status and the list of departamentos.', async () => {

    const mockDepartamentos = [
      {
        "_id": "66d9d3718781078305720f90",
        "nombre": "Cauca",
        "createdAt": "2024-09-05T15:51:13.105Z",
        "updatedAt": "2024-09-05T15:51:13.105Z",
        "__v": 0
      },
      {
        "_id": "66d9d3828781078305720f93",
        "nombre": "Valle del Cauca",
        "createdAt": "2024-09-05T15:51:30.899Z",
        "updatedAt": "2024-09-05T15:51:30.899Z",
        "__v": 0
      }
    ]

    DepartamentoModel.find.mockResolvedValue(mockDepartamentos);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await getAllDespartamentos(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Departamentos obtenidos correctamente!",
      data: mockDepartamentos
    });

  });


  it('should return 500 status and error message.', async() => {
    
    DepartamentoModel.find.mockRejectedValue(new Error("error"));

    const req = {};
    const res = {
      status : jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await getAllDespartamentos(req, res);

    expect(res.json).toHaveBeenCalledWith({
      message: "Error al obtener los departamentos, error",
      error: new Error("error")
    });
    expect(res.status).toHaveBeenCalledWith(500);

  });


  afterAll(async() => {
    await mongoose.disconnect();
    server.close();
  });

});
