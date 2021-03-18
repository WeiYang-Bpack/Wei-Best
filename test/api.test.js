const { expect } = require('chai');
let chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../backend/app');
const product = require('../backend/models/product');

//Assertion Style
chai.should();

chai.use(chaiHttp);
const mainURL = 'localhost:4000'
const testProdID = '602436a84dcd3718fa81b080';


//Product ONLY
describe('Product API', () => {
  //Get All Product
  describe("GET /api/v1/products", () => {
    it('It get all the products', (done) => {
      chai.request(mainURL)
        .get('/api/v1/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.have
          done();
        })

    })

  })

  //Get Single Products
  describe("GET /api/v1/products/:id", () => {
    it('It get single test products', (done) => {
      chai.request(mainURL)
        .get(`/api/v1/product/${testProdID}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('product');
          res.body.product.should.have.property('price');
          res.body.product.should.have.property('ratings');
          res.body.product.should.have.property('stock');
          res.body.product.should.have.property('numOfReviews');
          res.body.product.should.have.property('_id');
          res.body.product.should.have.property('name');
          res.body.product.should.have.property('description');
          res.body.product.should.have.property('images');
          res.body.product.should.have.property('category');
          res.body.product.should.have.property('seller');
          res.body.product.should.have.property('reviews');
          res.body.product.should.have.property('createdAt');
          done();
        })

    })

  })

  //Adding/Removing Review to Product
  describe("GET /api/v1/review", () => {
    let review = {
      rating: 3,
      comment: "good",
      productId: "602436a84dcd3718fa81b080"
    }
    
    it('Require Login for Product Review Checker', (done) => {
    

  

      chai.request(mainURL)
        .put(`/api/v1/review/`)
        .send(review)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('success').eql(false);
          res.body.should.have.property('message').eql('Login first to access this resource.')
          done();
        })

    })




  })






})



//Login User
describe('USER API', () => {
  describe("GET /api/v1/login", () => {
    it('Login Fails user', (done) => {
      let user = {
        email: "o@oa.com",
        password: "abc1234",
      }

      chai.request(mainURL)
        .post(`/api/v1/login`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('success').eql(false);
          res.body.should.have.property('message').eql('Invalid Email or Password')
          done();
        })

    })



    it('Login user', (done) => {
      let user = {
        email: "o@o.com",
        password: "abc1234",
      }

      chai.request(mainURL)
        .post(`/api/v1/login`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('token');
          expect(res).to.have.cookie('token');
          expect(res).to.have.header('Cookie')
          done();
        })

    })

  })


  //Check /api/v1/me Protected route
  describe("GET /api/v1/me/", () => {
    it('Checking Protected Route (User Profile)', (done) => {


      chai.request(mainURL)
        .get(`/api/v1/me`)

        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.have.property('success').eql(false);
          res.body.should.have.property('message').eql('Login first to access this resource.')
          done();
        })


    })

    it('Login User to access User info', (done) => {

      let user = {
        email: "o@o.com",
        password: "abc1234",
      }
      chai.request(mainURL)
        .post(`/api/v1/login`)
        .send(user)
        .end((err, res) => {
          console.log('Login for /api/v1/me route')
          res.should.have.status(200);

          var token = res.body.token;

          chai.request(mainURL)
          .get('/api/v1/me')
          .set('Cookie', 'token=' + token)
          .end((err,res)=>{
            res.should.have.status(200)
            
            done();
          })
          
        })

    })

  })


  //Logout User 
  describe("GET /api/v1/logout", () => {
    it('Logout User Remove Token', (done) => {


      chai.request(mainURL)
        .get(`/api/v1/logout`)

        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('success').eql(true);
          res.body.should.have.property('message').eql('Logged out')
          done();
        })


    })

  })

})




//Authed Routes
describe('Auth API', () => {

  it('Login User then test all Auth Routes', (done) => {
    let user = {
      email: "o@o.com",
      password: "abc1234",
    }

    let review = {
      rating: 5,
      comment: "Testing",
      productId: "9185490128490128409"
    }

    console.log('Logging In for Auth..')
    chai.request(mainURL)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        var token = res.body.token;


        

        chai.request(mainURL)
          .put('/api/v1/review')
          .set('Cookie', 'token=' + token)

          .end((err, res) => {
            done();
          })

      })

  })






})




  //Admin USER


