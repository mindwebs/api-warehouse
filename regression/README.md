# Simple Linear and Polynomial Regression

Contains ExpressJS based simple regression model that returns **Linear** or **Polynomial** Regression Constants and can return Y values for a given function.

### Steps to Install
``cd nodejs``  
``npm i``
``node app.js``

## Requests
The Requests can be found under the requests folder, however these are the current requests that can be performed. All are **POST** methods.  

1. /linearConsts - "array": Number Array  
2. /getY - "array": Number Array, "x": Number  
3. /getX - "array": Number Array, "y": Number  
4. /polyConsts - "array": Number Array, "order": Number  
5. /polyGetY - "array": Number Array, "order": Number, "x": Number  
