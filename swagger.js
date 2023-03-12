const swaggerAutogen = require('swagger-autogen')()

//secondhandvinhome.herokuapp.com
//localhost:5000
const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "secondhandvinhome.herokuapp.com",
    basePath: "/",
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: "https",
            scheme: "bearer",
            bearerFormat: "JWT"
        },
    },
    definitions: {
        Parents: {
            father: "Simon Doe",
            mother: "Marie Doe"
        },
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                $ref: '#/definitions/Parents'
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddUser: {
            $name: "Jhon Doe",
            $age: 29,
            about: ""
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./server/server.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server/server')           // Your project's root file
})