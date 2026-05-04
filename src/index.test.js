// this is the test file for the application.
const sayHi = require('./index.js')

test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})
