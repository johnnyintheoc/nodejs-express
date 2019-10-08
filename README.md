# Node.js Express Web Server: Routing + MySQL
<p>Example of a Node.js dynamic website that can serve data from a MySQL database.</p>
<p>Packages used: express, express-handlebars, method-override, body-parser, mysql</p>
<p>Pages: Home, About, Contact.</p>
<p>MySQL database is used in the Contact page.</p>

<p>To Install:</p>
```node npm install express express-handlebars method-override body-parser mysql -S```
<br>```node npm init```
<br><br>

<p>To Run:</p>
```node node server````
<br><br>

<p>MySQL table:</p>
```node
CREATE TABLE contacts(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first VARCHAR(100) NOT NULL,
last VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL)
```
