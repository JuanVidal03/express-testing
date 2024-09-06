const { app, server } = require("../src/server.js");
const mongoose = require("mongoose");
const request = require("supertest");

const { getAllDespartamentos } = require("../src/models/departamento.model.js")
const { DepartamentoModel } = require("../src/models/departamento.model.js");


jest.mock("../src/models/departamento.model.js");
/*
describe('Test departamento endpoints', () => {

  let DepartamentoModel;

  beforeAll(async () => {
      DepartamentoModel = await import('../src/models/departamento.model.js');
      DepartamentoModel.find = jest.fn();
  });

  it('should return 200 status and the list of departamentos', async() => {

      DepartamentoModel.find.mockResolvedValue([
        {
          _id: '66d9d3718781078305720f90',
          nombre: 'Cauca',
          createdAt: '2024-09-05T15:51:13.105Z',
          updatedAt: '2024-09-05T15:51:13.105Z',
          __v: 0
        },
        {
          _id: '66d9d3828781078305720f93',
          nombre: 'Valle del Cauca',
          createdAt: '2024-09-05T15:51:30.899Z',
          updatedAt: '2024-09-05T15:51:30.899Z',
          __v: 0
        },
        {
          _id: '66d9d3cd8781078305720f97',
          nombre: 'Nariño',
          createdAt: '2024-09-05T15:52:45.183Z',
          updatedAt: '2024-09-05T15:52:45.183Z',
          __v: 0
        }
      ]);

      const response = await request(app).get("/api/departamentos");
      console.log(response.body);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('data');

  });
    

    afterAll(() => {
        mongoose.connection.close();
        server.close();
    });

});
*/

describe('Departamento Controller', () => {
/*
  it('debería devolver todos los departamentos', async () => {

    const mockDepartamentos = {
      "message": "Departamentos obtenidos correctamente!",
      "data": [
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
    }

    // DepartamentoModel.find = jest.fn().mockResolvedValueOnce(mockDepartamentos);
    DepartamentoModel.find.mockResolvedValue(mockDepartamentos);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await getAllDespartamentos(req, res);
    const [jsonCall] = res.json.mock.calls;
    console.log('JSON called with:', jsonCall);

    expect(res.json).toHaveBeenCalledWith(mockDepartamentos);
    expect(res.status).toHaveBeenCalledWith(200);

  });
  */

  it('Deberia manejar errores obtener departamentos', async() => {
    
    DepartamentoModel.find.mockRejectedValue(new Error("error"));

    const req = {};
    const res = {
      status : jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const json = res.json.mock.calls;
    const status = res.status.mock.calls;
    console.log(json, status);

    await getAllDespartamentos(req, res);
    expect(res.json).toHaveBeenCalledWith({
      message: `Error al obtener los departamentos, ${error.message}`,
      error
    });
    expect(res.status).toHaveBeenCalledWith(500);

  });
  


  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });

});
