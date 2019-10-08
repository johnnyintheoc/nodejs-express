# Node JS Express Web Server: Routing + MySQL
<p>Example of a Node.js dynamic website that can serve data from a MySQL database.</p>
<p>Packages used: express, express-handlebars, method-override, body-parser, mysql</p>
<p>Pages: Home, About, Contact.</p>
<p>MySQL database is used in the Contact page.</p>

<p>To Install:</p>
<code>npm install express express-handlebars method-override body-parser mysql -S</code>
<code>npm init</code>
<br><br>

<p>To Run:</p>
<code>node server</code>
<br><br>

<p>MySQL table:</p>
<code>
CREATE TABLE contacts(
<br>id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
<br>first VARCHAR(100) NOT NULL,
<br>last VARCHAR(100) NOT NULL,
<br>email VARCHAR(100) NOT NULL)
</code>
