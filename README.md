# nodejs-express
<p>Example of a NodeJS dynamic website that can serve data from a MySQL database.</p>
<p>Packages used: express, express-handlebars, method-override, body-parser, mysql</p>
<p>Pages: Home, About, Contact.</p>
<p>MySQL database is used in the Contact page.</p>

<p>To Install:</p>
<code>npm install express express-handlebars method-override body-parser mysql -S</code>
<code>npm init</code>

<p>To Run:</p>
<code>node server</code>

<p>MySQL table:</p>
<code>
CREATE TABLE contacts(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first VARCHAR(100) NOT NULL,
last VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL)
</code>
