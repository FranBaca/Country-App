/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  // before(() => conn.authenticate()
  // .catch((err) => {
  //   console.error('Unable to connect to the database:', err);
  // }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(pokemon)));
  describe('GET /countries', function(){
    this.timeout(5000)
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get 404', () =>
      agent.get('/paises').expect(404)  
    );
    it('should get Albania', () =>
      agent.get('/countries?name=Alba')
      .then(res=>{
        expect(res.body[0].name).equal("Albania")
      })
    );
    it('should get continent', () =>
      agent.get('/countries?continent=Americas')
      .then(res=>{
        expect(res.body.length).equal(57)
        expect(res.body[0].name).equal("Anguilla")
      })
    );


    
    
  })})
