const app = require('../app')
const request = require('supertest')

test("All todo data should have an active status",(done)=>{
    request(app)
        .get('/todo/')
        .expect(200)
            .then(response=>{
                const todos = response.body;
                todos.forEach(todo => {
                    expect(todo.status).toBe("active");
                });
                done();
            })
            .catch(done)
})

test("should provide one todo data", (done)=>{
    request(app)
        .get('/todo/2')
        .expect(200)
            .then(response=>{
                const todo = response.body;
                expect(todo).toBeTruthy();
                done()
            })
            .catch(done)
})

test("message data not found", (done)=>{
    request(app)
        .get('/todo/899')
        .expect(400)
            .then(response=>{
                const {message} = response.body;
                expect(message).toBe("Data Tidak Ditemukan")
                done()
            })
            .catch(done)
})
let todoId
test("should successfully create data", (done)=>{
    request(app)
        .post('/todo/')
        .send({
            title : "makan makan makan",
            description : "Makan 3 kali seharri"
        })
        .expect(201)
            .then(response=>{
                const todo = response.body;
                expect(todo).toBeTruthy();
                todoId = '/todo/'+todo.id;
                done()
            })
            .catch(done)
})

test("it should send an incorrect input message", (done)=>{
    request(app)
        .post('/todo/')
        .expect(400)
            .then(response=>{
                const {message} = response.body;
                expect(message).toBe("title atau deskripsi kosong")
                done()
            })
            .catch(done)
})


// hanya bisa dipake sekali jadi saya comment saja 

test("should successfully delete data", (done)=>{
    request(app)
        .delete(todoId)
        .expect(200)
            .then(response=>{
                const {message} = response.body;
                expect(message).toBe("Delete Success")
                done()
            })
            .catch(done)
})

test("should not be able to delete todo data", (done)=>{
    request(app)
        .delete('/todo/1000')
        .expect(400)
            .then(response=>{
                const {message} = response.body;
                expect(message).toBe("Tidak dapat menghapus data kosong")
                done()
            })
            .catch(done)
})
