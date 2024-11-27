const request = require('supertest');
const app = require('../app'); // Your Express app

describe('Task Routes', () => {
  it('should fetch paginated tasks', async () => {
    const res = await request(app).get('/tasks?page=1&search=test&filter=pending');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('rows'); // Assuming Sequelize `findAndCountAll`
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'New Task',
        description: 'Task description',
        priority: 'high',
        status: 'pending',
        deadline: '2024-12-31',
        userId: 1,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('task');
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put('/tasks/1')
      .send({
        title: 'Updated Task',
        description: 'Updated description',
        priority: 'medium',
        status: 'completed',
        deadline: '2024-11-30',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Task deleted successfully!');
  });
});
